<template>
  <section>
    <div class="row header">
      <h1>استماره التسجيل</h1>
      <p>جميع البيانات المطلوبه رئيسيه</p>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-xl-12">
          <form>
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
                      :disabled="disable"
                    />
                    <div v-if="v.na_ID.$error" class="error">
                      الرقم القومي غير صحيح
                    </div>
                  </label>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-xl-6 col-sm-6 col-12" v-show="passShow">
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
              <div class="col-xl-6 col-sm-6 col-12" v-show="passShow">
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
                            <div v-if="v.addresses.$error">
                              يرجي ادخال رقم البلد
                            </div>
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
                            <div v-if="v.addresses.$error">
                              يرجي ادخال المحافظه
                            </div>
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
                            <div v-if="v.addresses.$error">
                              يرجي ادخال رقم الشقه
                            </div>
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
                            <div v-if="v.addresses.$error">
                              يرجي ادخال رقم الشارع
                            </div>
                          </div>
                        </div>
                      </div>

                      <button
                        @click.prevent="remove(index, 'addresses')"
                        v-show="
                          index || (!index && v.addresses.$model.length > 1)
                        "
                        class="is-error"
                      >
                        - ازاله هذا العنوان
                      </button>
                      <button
                        @click.prevent="add('addresses', v1)"
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
                        :class="v.phones.$error ? 'error' : ''"
                      />
                      <div
                        v-for="error in v.phones.$each.$response.$errors[k]
                          .phone"
                        :key="error"
                        class="error"
                      >
                        <div v-if="v.phones.$error">يرجي ادخال رقم الهاتف</div>
                      </div>
                      <button
                        @click.prevent="remove(k, 'phones')"
                        v-show="k || (!k && v.phones.$model.length > 1)"
                        class="is-error"
                      >
                        ازاله هذا الرقم
                      </button>
                      <button
                        @click.prevent="add('phones', v2)"
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
                      accept="image/png, image/jpg, image/jpeg"
                      class="img_uploader"
                    />
                  </label>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-xl-6 col-sm-6 col-12 gender__exception">
                <div class="input_container ge">
                  <p>النوع</p>
                  <label class="ge__flex">
                    <label class="gneder">
                      <input
                        type="radio"
                        id="male"
                        name="male"
                        value="male"
                        v-model="v.gender.$model"
                        :class="gender ? 'activeinput' : ''"
                        @click="showGender('gender', 'gender2')"
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
                        @click="showGender('gender2', 'gender')"
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
                          v.date.$model
                            ? v.date.$model.toISOString().slice(0, 10)
                            : 'DD/MM/YYYY'
                        "
                        v-maska="'##/##/####'"
                        :disabled="disable"
                        @click="disable ? '' : show()"
                      />
                      <img src="@/assets/Group2528.png" alt="add" />
                    </div>
                    <v-date-picker
                      v-if="visible"
                      v-model="v.date.$model"
                      class="dateWidth"
                      @click="show()"
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
                  :class="
                    donetxt ? 'btn btn-secondary done' : 'btn btn-secondary'
                  "
                  @click="submit()"
                >
                  <span v-if="donetxt === false">تاكيد البيانات</span>
                  <span v-else class="confirmed">تم التاكيد</span>
                </button>
              </div>
              <div class="col-xl-6 col-sm-12 col-12" v-show="done">
                <button
                  type="button"
                  :class="
                    resetV ? 'btn btn-secondary done' : 'btn btn-secondary'
                  "
                  @click="reset()"
                >
                  <span v-if="!resetV">اعاده البيانات</span>
                  <span v-else class="confirmed">تمت الاعاده</span>
                </button>

                <button
                  type="button"
                  :class="
                    editV ? 'btn btn-secondary done' : 'btn btn-secondary'
                  "
                  @click="edit()"
                >
                  <span v-if="!editV">تعديل البيانات</span>
                  <span v-else class="confirmed">تم التعديل</span>
                </button>
              </div>
            </div>
          </form>
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
      resetV: false,
      editV: false,
      disable: false,
      passShow: true,
      donetxt: false,
      v1: {
        country: "",
        flat: "",
        gov: "",
        st: "",
      },
      v2: { phone: "" },
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
              minLength: minLength(11),
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
      if (this.v.$errors.length > 0) {
        console.log("error", this.v.$errors.length);
      } else {
        this.done = true;
        this.donetxt = true;
        setTimeout(() => {
          this.donetxt = false;
          console.log("2sec");
        }, 3000);
        this.editV = false;
        this.resetV = false;
        console.log("Done", this.done);
        this.passShow = true;
      }

      // perform async actions
    },
    reset() {
      this.v.$reset();
      this.v.phones.$model = [{ phone: "" }];
      this.v.phones.$reset;
      this.v.addresses.$model = [{ country: "", flat: "", gov: "", st: "" }];
      this.v.addresses.$reset;
      this.v.password.password = "";
      this.v.password.confirm = "";
      this.v.email.$model = "";
      this.v.fName.$model = "";
      this.v.na_ID.$model = "";
      this.v.date.$model = "";
      this.v.lName.$model = "";
      this.v.gender.$model = "";
      this.gender = false;
      this.editV = true;
      this.done = false;
      this.passShow = false;
      this.gender2 = false;
      this.editV = false;
      this.resetV = true;
    },
    edit() {
      this.v.phones.$model = [{ phone: "" }];
      this.v.phones.$reset;
      this.v.addresses.$model = [{ country: "", flat: "", gov: "", st: "" }];
      this.v.addresses.$reset;
      this.v.password.password = "";
      this.v.password.confirm = "";
      this.v.email.$model = "";
      this.v.fName.$model = "";
      this.v.lName.$model = "";
      this.v.gender.$model = "";
      this.gender = false;
      this.editV = true;
      this.disable = true;
      this.done = false;
      this.donetxt = false;
      this.passShow = false;
      this.gender2 = false;
    },
    add(key, value) {
      this.v[key].$model.push(value);
    },

    remove(index, key) {
      this.v[key].$model.splice(index, 1);
    },
    show() {
      this.visible = !this.visible;
      console.log("Visible", this.visible);
    },
    showGender(g, g2) {
      this[g] = !this[g];
      this[g2] = false;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/form.scss";
</style>
