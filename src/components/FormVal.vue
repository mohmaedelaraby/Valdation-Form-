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
                      v-for="error in v.phones.$each.$response.$errors[k].phone"
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
            <div class="col-xl-6 col-sm-12 col-12">
              <button
                type="button"
                :class="done ? 'btn btn-secondary done' : 'btn btn-secondary'"
                @click="submit()"
              >
                <span v-if="!done">تاكيد البيانات</span>
                <span v-else style="color: green">تم التاكيد</span>
              </button>
            </div>
            <div class="col-xl-6 col-sm-12 col-12">
              <button
                type="button"
                :class="done ? 'btn btn-secondary done' : 'btn btn-secondary'"
                @click="reset()"
              >
                <span v-if="!done">اعاده البيانات</span>
                <span v-else style="color: green">تمت الاعاده</span>
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
      this.v.$touch();
      // perform async actions
    },
    reset() {
      this.v.$reset();
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
@import "@/assets/styles/form.scss";
</style>
