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
                  <input
                    v-model="v.fName.$model"
                    :class="v.fName.$error ? 'input__error' : ''"
                  />
                  <div v-if="v.fName.$error" class="error">
                    يجب ادخال اسمك الاول
                  </div>
                </label>
              </div>
            </div>
            <div class="col-xl-6 col-sm-6 col-12">
              <div class="input_container">
                <p>الاسم الاخير</p>
                <label>
                  <input
                    type="text"
                    v-model="v.lName.$model"
                    :class="v.lName.$error ? 'input__error' : ''"
                  />
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
                  <input
                    type="text"
                    v-model="v.email.$model"
                    :class="v.email.$error ? 'input__error' : ''"
                  />
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
                  <input
                    type="text"
                    v-model="v.na_ID.$model"
                    :class="v.na_ID.$error ? 'input__error' : ''"
                  />
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
                  <div
                    class="dateConatiner"
                    :class="v.password.password.$error ? 'input__error' : ''"
                  >
                    <input
                      :type="passVislible ? 'text' : 'password'"
                      v-model="v.password.password.$model"
                    />

                    <img
                      src="@/assets/eye.svg"
                      alt="add"
                      @click="
                        () => {
                          passVislible = !passVislible;
                        }
                      "
                      class="eyeIcon"
                    />
                  </div>

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
                  <div
                    class="dateConatiner"
                    :class="v.password.confirm.$error ? 'input__error' : ''"
                  >
                    <input
                      :type="ConfirmpassVislible ? 'text' : 'password'"
                      v-model="v.password.confirm.$model"
                    />
                    <img
                      src="@/assets/eye.svg"
                      alt="add"
                      @click="
                        () => {
                          ConfirmpassVislible = !ConfirmpassVislible;
                        }
                      "
                      class="eyeIcon"
                    />
                  </div>

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
                    <div class="row addresses">
                      <div class="col-xl-6 col-sm-12 col-12">
                        <input
                          v-model="item.country"
                          type="text"
                          placeholder="ادخل اسم البلد"
                        />
                        <div
                          v-for="error in v.addresses.$each.$response.$errors[
                            index
                          ].country"
                          :key="error"
                          class="error-msg"
                        >
                          يرجي ادخال البلد
                        </div>
                      </div>
                      <div class="col-xl-6 col-sm-12 col-12">
                        <input
                          v-model="item.gov"
                          type="text"
                          placeholder="ادخل اسم المحافظه"
                        />
                        <div
                          v-for="error in v.addresses.$each.$response.$errors[
                            index
                          ].gov"
                          :key="error"
                          class="error-msg"
                        >
                          يرجي ادخال المحافظه
                        </div>
                      </div>
                    </div>

                    <div class="row addresses">
                      <div class="col-xl-6 col-sm-12 col-12">
                        <input
                          v-model="item.flat"
                          type="text"
                          placeholder="ادخل رقم الشقه"
                        />
                        <div
                          v-for="error in v.addresses.$each.$response.$errors[
                            index
                          ].flat"
                          :key="error"
                          class="error-msg"
                        >
                          يرجي ادخال رقم الشقه
                        </div>
                      </div>
                      <div class="col-xl-6 col-sm-12 col-12">
                        <input
                          v-model="item.st"
                          type="text"
                          placeholder="ادخل اسم الشارع"
                        />
                        <div
                          v-for="error in v.addresses.$each.$response.$errors[
                            index
                          ].st"
                          :key="error"
                          class="error-msg"
                        >
                          يرجي ادخال اسم الشارع
                        </div>
                      </div>
                    </div>

                    <button
                      @click="remove(index)"
                      v-show="
                        index || (!index && v.addresses.$model.length > 1)
                      "
                      class="is-error"
                    >
                      - ازاله هذا العنوان
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
                    <input
                      type="text"
                      v-model="input.phone"
                      id="phone"
                      placeholder="(....123456789)(+02)"
                      v-maska="['+2 (###) ##-##-##', '+1 (###) ###-##-##']"
                    />
                    <div
                      v-for="error in v.phones.$each.$response.$errors[k]
                        .phone"
                      :key="error"
                      class="error"
                    >يرجي ادخال رقم الهاتف</div>
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
                      :class="gender ? 'activeinput' : ''"
                      @click="showGender(1)"
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
                      :class="gender2 ? 'activeinput' : ''"
                      @click="showGender(2)"
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
                      v-maska="'##/##/####'"
                    />
                    <img
                      src="@/assets/Group2528.png"
                      alt="add"
                      @click="show(1)"
                    />
                  </div>
                  <v-date-picker
                    v-show="visible"
                    v-model="v.date.$model"
                    style="width: 100%"
                    @click="show(2)"
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
                :class="done ? 'btn btn-secondary done' : 'btn btn-secondary'"
                style="margin-top: 50px"
                @click="submit()"
              >
                <span v-if="!done">تاكيد البيانات</span>
                <span v-else style="color: green">تم التاكيد</span>
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
import { reactive, computed } from "vue";
import { maska } from "maska";

export default {
  directives: { maska },
  data() {
    return {
      visible: false,
      gender: false,
      gender2: false,
      done: false,
      passVislible: false,
      ConfirmpassVislible: false,
    };
  },
  setup() {
    const state = reactive({
      addresses: [{ country: "", flat: "", gov: "", st: "" }],
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

    const rules = computed(() => {
      return {
        addresses: {
          $each: helpers.forEach({
            country: {
              required,
            },
            flat: {
              required,
            },
            gov: {
              required,
            },
            st: {
              required,
            },
          }),
        },
        phones: {
          $each: helpers.forEach({
            phone: {
              required,
              minLength: minLength(10),
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
          confirm: { required, sameAs: sameAs(state.password.password) },
        },

        date: {
          required,
        },
      };
    });

    const v = useVuelidate(rules, state);
    return { rules, v };
  },
  methods: {
    submit() {
      this.v.$reset()
      this.v.$touch()
      // perform async actions
    },
    add() {
      this.v.addresses.$model.push({
        country: "",
        flat: "",
        gov: "",
        st: "",
      });
    },
    add2() {
      this.v.phones.$model.push({
        phone: "",
      });
    },

    remove(index) {
      this.v.addresses.$model.splice(index, 1);
    },
    remove2(index) {
      this.v.phones.$model.splice(index, 1);
    },
    show(x) {
      if (x === 1) {
        this.visible = true;
      } else if (x === 2) {
        this.visible = false;
      }
    },
    showGender(x) {
      if (x === 1) {
        this.gender = !this.gender;
        this.gender2 = false;
      } else if (x === 2) {
        this.gender2 = !this.gender2;
        this.gender = false;
      }
    },
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
      .done {
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
      border-radius: 0.25rem;
      height: fit-content;

      input {
        border: none;
        outline: none;
      }
      img {
        margin-left: 5px;
        cursor: pointer;
      }
      .eyeIcon {
        width: 15px;
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
        .row {
          margin-top: 0;
        }
        .addresses {
          display: flex;
          flex-direction: row;
          width: 100%;

          .error {
            border: 1px solid red;
          }
          .error-msg {
            color: red;
          }
        }
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
      .input__error {
        border: 1px solid red;
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
      .activeinput {
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
