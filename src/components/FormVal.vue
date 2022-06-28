<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-xl-12">
          <div class="row">
            <div class="col-xl-6 col-sm-6 col-12">
              <div class="input_container">
                <p>First Name</p>
                <label>
                  <input v-model="fName" />
                  <div v-if="v$.fName.$error" class="error">
                    Name field has an error.
                  </div>
                </label>
              </div>
            </div>
            <div class="col-xl-6 col-sm-6 col-12">
              <div class="input_container">
                <p>Last Name</p>
                <label>
                  <input type="text" v-model="lName" />
                  <div v-if="v$.lName.$error" class="error">
                    Name field has an error.
                  </div>
                </label>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-xl-6 col-sm-6 col-12">
              <div class="input_container">
                <p>E-Mail</p>
                <label>
                  <input type="text" v-model="email" />
                  <div v-if="v$.email.$error" class="error">
                    Email field has an error.
                  </div>
                </label>
              </div>
            </div>
            <div class="col-xl-6 col-sm-6 col-12">
              <div class="input_container">
                <p>National ID</p>
                <label>
                  <input type="text" v-model="na_ID" />
                  <div v-if="v$.na_ID.$error" class="error">
                    Nationl ID field has an error.
                  </div>
                </label>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-xl-6 col-sm-6 col-12">
              <div class="input_container">
                <p>Password</p>
                <label>
                  <input type="text" v-model="password" />
                  <div v-if="v$.password.$error" class="error">
                    password field has an error.
                  </div>
                </label>
              </div>
            </div>
            <div class="col-xl-6 col-sm-6 col-12">
              <div class="input_container">
                <p>Confirm Password</p>
                <label>
                  <input type="text" v-model="confirmPassword" />
                  <div v-if="v$.confirmPassword.$error" class="error">
                    confirmPassword field has an error.
                  </div>
                </label>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-xl-6 col-sm-6 col-12">
              <div class="input_container">
                <p>Address</p>
                <label>
                  <input type="text" v-model="address" />
                  <div v-if="v$.address.$error" class="error">
                    address field has an error.
                  </div>
                </label>
              </div>
            </div>
            <div class="col-xl-6 col-sm-6 col-12">
              <div class="input_container">
                <p>Phone Number</p>
                <label>
                  <input type="text" v-model="phone" />
                  <div v-if="v$.phone.$error" class="error">
                    phone field has an error.
                  </div>
                </label>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-xl-12 col-sm-12 col-12">
              <div class="input_container">
                <p>Upload Image</p>
                <label>
                  <FormKit
                    type="file"
                    accept=".jpg,.png,.svg"
                  />
                </label>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-xl-6 col-sm-6 col-12">
              <div class="input_container">
                <p>Gender</p>
                <label style="align-items: flex-start">
                  <label class="gneder">
                    <input
                      type="radio"
                      id="male"
                      name="male"
                      value="male"
                      v-model="gender"
                      style="width: 20%"
                    />
                    <label for="male">male</label><br />
                  </label>
                  <label class="gneder">
                    <input
                      type="radio"
                      id="fmale"
                      name="fmale"
                      value="fmale"
                      v-model="gender"
                      style="width: 20%"
                    />
                    <label for="fmale">male</label><br />
                  </label>
                  <div v-if="v$.gender.$error" class="error">
                    gander field has an error.
                  </div>
                </label>
              </div>
            </div>

            <div class="col-xl-6 col-sm-6 col-12">
              <div class="input_container">
                <p>BirthDate</p>
                <label>
                  <v-date-picker v-model="date" />
                  <div v-if="v$.date.$error" class="error">
                    address field has an error.
                  </div>
                </label>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-xl-12 col-sm-12 col-12">
              <button type="button" class="btn btn-secondary" style="margin-top: 50px;" @click="submit()">Sumbit</button>
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
} from "@vuelidate/validators";

export default {
  setup() {
    return { v$: useVuelidate() };
  },

  data() {
    return {
      fName: "",
      lName: "",
      email: "",
      na_ID: "",
      password: "",
      confirmPassword: "",
      address: "",
      phone: "",
      gender: "",
      date:''
    };
  },
  validations() {
    return {
      fName: { required }, // Matches this.firstName
      lName: { required }, // Matches this.lastName,
      gender: { required }, // Matches this.lastName
      email: { required, email }, // Matches this.contact.email
      na_ID: { required, minLength: minLength(14), maxLength: maxLength(14) },
      password: { required, minLength: minLength(8) },
      confirmPassword: {
        required,
        sameAsPassword: sameAs(this.password), // can be a reference to a field or computed property
      },
      address: {
        required,
        minLength: minLength(1),
      },
      phone: {
        required,
        minLength: minLength(1),
      },
      date:{
        required
      }
    };
  },
  methods: {
    async submit() {
      const result = await this.v$.$validate();
      if (!this.v$.$error) {
        console.log("DOne", result);
        this.done = true;
      } else {
        console.log("error");
      }
      // perform async actions
    },
  },
};
</script>

<style lang="scss" scoped>
section {
  background-color: #f8f8f8;

  display: flex;
  align-items: center;
  justify-content: center;

  .container {
    background-color: white;
    width: 75%;
    padding: 95px;
    border: 1px solid #f8f8f8;
    margin-top: 50px;
    margin-bottom: 50px;
    box-shadow: 0 3px 7px 0 rgba(0, 0, 0, 0.16);
    .col-xl-12 {
      .row {
        margin-top: 10px;
      }
    }
  }
  .input_container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    p {
      text-align: left;
      color: #ababab;
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
        justify-content: space-evenly;
        width: 19%;
      }

      input {
        width: 99%;
        height: 40px;
        color: #ababab;
        border: 1px solid #ababab;
      }
      .error {
        font-size: 12px;
        color: red;
      }
    }
  }
}
</style>
