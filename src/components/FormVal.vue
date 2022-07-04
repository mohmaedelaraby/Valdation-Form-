<template>
  <section>
    <div class="row header">
      <h1>استماره التسجيل</h1>
      <p>جميع البيانات المطلوبه رئيسيه</p>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-xl-12">
          <div class="row">
            <div class="col-xl-6 col-sm-6 col-12">
              <div class="input_container">
                <p>الاسم الاول</p>
                <label>
                  <input v-model="v.fName.$model" />
                  <div v-if="v.fName.$error" class="error">
                    يجب ادخال اسمك الاول
                  </div>
                  <div v-for="error in v.fName.$error" :key="error">
                    ERR- {{ error.$message }}
                  </div>
                </label>
              </div>
            </div>
            <div class="col-xl-6 col-sm-6 col-12">
              <div class="input_container">
                <p>الاسم الاخير</p>
                <label>
                  <input type="text" v-model="v.lName.$model" />
                  <div v-if="v.lName.$error" class="error">
                    يجب ادخال اسمك الاخير
                  </div>
                </label>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-xl-6 col-sm-6 col-12">
              <div class="input_container">
                <p>البريد الالكتروني</p>
                <label>
                  <input type="text" v-model="v.email.$model" />
                  <div v-if="v.email.$error" class="error">
                    البريد الالكتروني خاطيء
                  </div>
                </label>
              </div>
            </div>
            <div class="col-xl-6 col-sm-6 col-12">
              <div class="input_container">
                <p>الرقم القومي</p>
                <label>
                  <input type="text" v-model="v.na_ID.$model" />
                  <div v-if="v.na_ID.$error" class="error">
                    الرقم القومي غير صحيح
                  </div>
                </label>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-xl-6 col-sm-6 col-12">
              <div class="input_container">
                <p>الرقم السري</p>
                <label>
                  <input type="text" v-model="v.password.password.$model" />
                  <div v-if="v.password.password.$error" class="error">
                    يرجي ادخال الرقم السري
                  </div>
                </label>
              </div>
            </div>
            <div class="col-xl-6 col-sm-6 col-12">
              <div class="input_container">
                <p>تاكيد الرقم السري</p>
                <label>
                  <input type="text" v-model="v.password.confirm.$model" />
                  <div v-if="v.password.confirm.$error" class="error">
                    يرجي التاكد من الرقم السري
                  </div>
                </label>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-xl-12 col-sm-12 col-12">
              <div class="input_container">
                <p>العنوان</p>
                <label>
                  <div
                    class="form-group"
                    v-for="(item, index) in v.addresses.$model"
                    :key="index"
                  >
                    <input v-model="item.address" type="text" />
                    <div
                      v-for="error in v.addresses.$errors"
                      :key="error"
                      class="error"
                    >
                      يرجي ادخال العنوان
                    </div>
                    <button
                      @click="remove(index)"
                      v-show="
                        index || (!index && v.addresses.$model.length > 1)
                      "
                      class="is-error"
                    >
                      ازاله هذا العنوان
                    </button>
                    <button
                      @click="add(index)"
                      v-show="index === v.addresses.$model.length - 1"
                    >
                      + اضافه عنوان اخر
                    </button>
                  </div>
                </label>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-xl-12 col-sm-12 col-12">
              <div class="input_container">
                <p>رقم الهاتف</p>
                <label>
                  <div
                    class="form-group"
                    v-for="(input, k) in v.phones.$model"
                    :key="k"
                  >
                    <input type="text" v-model="input.phone" />
                    <div
                      v-for="error in v.phones.$errors"
                      :key="error"
                      class="error"
                    >
                      يرجي ادخال رقم الهاتف
                    </div>

                    <button
                      @click="remove2(k)"
                      v-show="k || (!k && v.phones.$model.length > 1)"
                      class="is-error"
                    >
                      ازاله هذا الرقم
                    </button>
                    <button
                      @click="add2(k)"
                      v-show="k === v.phones.$model.length - 1"
                    >
                      + اضافه رقم اخر
                    </button>
                  </div>
                </label>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-xl-12 col-sm-12 col-12">
              <div class="input_container">
                <p>اضافه صوره</p>
                <label>
                  <input
                    type="file"
                    accept=".jpg,.png,.svg"
                    class="img_uploader"
                  />
                </label>
              </div>
            </div>
          </div>

          <div class="row">
            <div
              class="col-xl-6 col-sm-6 col-12"
              style="align-items: center; display: flex"
            >
              <div class="input_container ge">
                <p>النوع</p>
                <label style="align-items: flex-start">
                  <label class="gneder">
                    <input
                      type="radio"
                      id="male"
                      name="male"
                      value="male"
                      v-model="v.gender.$model"
                      style="width: 20%"
                      :class="gender?'activeinput':''"
                      @click="showGender()"
                    />
                    <label for="male">ذكر</label><br />
                  </label>
                  <label class="gneder">
                    <input
                      type="radio"
                      id="fmale"
                      name="fmale"
                      value="fmale"
                      v-model="v.gender.$model"
                      style="width: 20%"
                      :class="gender2?'activeinput':''"
                      @click="showGender2()"
                    />
                    <label for="fmale">مونث</label><br />
                  </label>
                  <div v-if="v.gender.$error" class="error">
                    يرجي اختيار النوع
                  </div>
                </label>
              </div>
            </div>

            <div class="col-xl-6 col-sm-6 col-12">
              <div class="input_container">
                <p>تاريخ الميلاد</p>
                <label>
                  <div class="dateConatiner">
                    <input
                      type="text"
                      :placeholder="
                        v.date.$model ? v.date.$model : 'DD/MM/YYYY'
                      "
                    />
                    <img
                      src="@/assets/Group2528.png"
                      alt="add"
                      @click="show()"
                    />
                  </div>
                  <v-date-picker
                    v-show="visible"
                    v-model="v.date.$model"
                    style="width: 100%"
                  />
                  <div v-if="v.date.$error" class="error">
                    تاريخ الميلاد غير صحيح
                  </div>
                </label>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-xl-12 col-sm-12 col-12">
              <button
                type="button"
                :class="done ? 'btn btn-secondary done':'btn btn-secondary'"
                style="margin-top: 50px"
                @click="submit()"
              >
              <span v-if="!done">تاكيد  البيانات</span>
              <span v-else style="color: green;">تم التاكيد</span>
              </button>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import {
  required,
  email,
  minLength,
  maxLength,
  sameAs, 
  helpers,
} from "@vuelidate/validators";
import { reactive ,computed } from "vue";

export default {
  data() {
    return {
      visible: false,
      gender:false,
      gender2:false,
      done:false
    };
  },
  setup() {
    const state = reactive({
      addresses: [{ address: "" }],
      phones: [{ phone: "" }],
      fName: "",
      lName: "",
      email: "",
      na_ID: "",
      password: {
        password: "",
        confirm: "",
      },

      gender: "",
      date: "",
    });



    const rules = computed(()=>{
      return{
      addresses: {
        $each: helpers.forEach({
          address: {
            required,
          },
        }),
      },
      phones: {
        $each: helpers.forEach({
          phone: {
            required,
            minLength:minLength(10)
          },
        }),
      },
      fName: { required }, // Matches this.firstName
      lName: { required }, // Matches this.lastName,
      gender: { required }, // Matches this.lastName
      email: { required, email }, // Matches this.contact.email
      na_ID: { required, minLength: minLength(14), maxLength: maxLength(14) },
      password: {
        password: { required, minLength: minLength(8) },
        confirm: { required,  sameAs: sameAs(state.password.password) },
      },

      date: {
        required,
      },
    };
    })
    
    const v = useVuelidate(rules, state);
    return { rules, v };
  },
  methods: {
    async submit() {
      const result = await this.v;
      this.v.$touch();

      if (!this.v.$error) {
        console.log("DOne", result);
        this.done = true;
      } else {
        console.log("error");
      }
      // perform async actions
    },
    add() {
      this.v.addresses.$model.push({
        address: "",
      });
      console.log(this.v.addresses.$model);
    },
    add2() {
      this.v.phones.$model.push({
        phone: "",
      });
      console.log(this.v.phones.$model);
    },

    remove(index) {
      this.v.addresses.$model.splice(index, 1);
    },
    remove2(index) {
      this.v.phones.$model.splice(index, 1);
    },
    show() {
      this.visible = !this.visible;
    },
    showGender(){
      this.gender=!this.gender;
      this.gender2=false
    },
    showGender2(){
      this.gender2=!this.gender2;
      this.gender=false
    }
  },
};
</script>

<style lang="scss" scoped>
section {
  background-color: #f8f8f8;
  display: flex;
  flex-direction: column;
  align-items: center;
  .header {
    margin: 0;
    width: 75%;
    h1 {
      text-align: right;
      padding-top: 50px;
      font-weight: 600;
    }
    p {
      text-align: right;
      color: #ababab;
      margin-bottom: 0px;
    }
  }
  .container {
    background-color: white;
    width: 75%;
    padding-right: 95px;
    padding-left: 95px;
    padding-bottom: 95px;
    padding-top: 40px;
    border: 1px solid #f8f8f8;
    margin-top: 50px;
    margin-bottom: 50px;
    box-shadow: 0 3px 7px 0 rgba(0, 0, 0, 0.16);
    .col-xl-12 {
      .btn {
        width: 30%;
        font-size: 22px;
      }
      .done{
        background-color: white;
      }
      .row {
        margin-top: 40px;
      }
    }
  }
  .input_container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    .dateConatiner {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      border: 1px solid #ababab;
      width: 100%;

      input {
        border: none;
        outline: none;
      }
      img {
        margin-left: 5px;
        cursor: pointer;
      }
    }
    p {
      text-align: right;
      color: #ababab;
      margin-bottom: 0px;
    }
    label {
      display: flex;
      align-items: flex-start;
      justify-content: center;
      flex-direction: column;
      .gneder {
        display: flex;
        /* justify-content: space-evenly; */
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        width: 33%;
      }
      .form-group {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: column;

        width: 100%;
        .is-error {
          border: 1px solid red;
          color: red;
        }
        input {
          display: block;
          width: 100%;
          padding: 0.375rem 0.75rem;
          font-size: 1rem;
          font-weight: 400;
          line-height: 1.5;
          color: #212529;
          background-color: #fff;
          background-clip: padding-box;
          border: 1px solid #ced4da;
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
          border-radius: 0.25rem;
          margin-top: 10px;
        }

        button {
          border-radius: 1px;
          border: 1px solid green;
          background-color: white;
          color: green;
          padding: 5px;
          width: 100%;
          height: 25px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          font-size: 12px;
          margin-top: 10px;
        }
      }

      input {
        display: block;
        width: 100%;
        padding: 0.375rem 0.75rem;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        color: #212529;
        background-color: #fff;
        background-clip: padding-box;
        border: 1px solid #ced4da;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        border-radius: 0.25rem;
      }
      .error {
        font-size: 12px;
        color: red;
      }
    }
    .img_uploader {
      border: none;
      color: #ababab;
    }
  }
  .ge {
    width: 100%;
    flex-direction: row;
    label {
      display: flex;
      align-items: flex-start;
      justify-content: space-evenly;
      flex-direction: row;
      width: 100%;
      .activeinput{
        background-color: black;

      }
      input {
        margin-left: 10px;
        width: 20%;
        cursor: pointer;
        /* height: 35%; */
        height: 25px;
        display: block;
        width: 100%;
        width: 25p;
        padding: 0.375rem 0.75rem;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        color: #212529;
        background-color: #fff;
        background-clip: padding-box;
        border: 1px solid #ced4da;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        /* border-radius: 28.25rem; */
        border-radius: 60px;
      }
    }
  }
}
</style>
