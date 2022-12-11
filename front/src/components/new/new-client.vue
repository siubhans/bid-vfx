<template>
  <div class="outterContainer">
    <sideBar v-if="loggedIn" />
    <div class="innerContainer">
      <mainHeading title="New Client" />
      <form @submit.prevent="addNewClient">
        <div v-if="error">{{ error }}</div>
        <div class="mb-3"></div>
        <div class="mb-3">
          <label for="name" class="form-label">Name</label>
          <input
            type="text"
            class="form-control"
            v-model="name"
            id="name"
            placeholder="Client's Name"
          />
          <p v-for="error of v$.name.$errors" :key="error.$uid" class="error">
            <strong>{{ error.$message }}</strong>
          </p>
        </div>
        <div class="mb-3">
          <label for="producer" class="form-label">Producer</label>
          <input
            type="text"
            class="form-control"
            v-model="producer"
            id="producer"
            placeholder="Producer's Name"
          />
          <p
            v-for="error of v$.producer.$errors"
            :key="error.$uid"
            class="error"
          >
            <strong>{{ error.$message }}</strong>
          </p>
        </div>
        <div class="mb-3">
          <label for="studio" class="form-label">Studio</label>
          <input
            type="text"
            class="form-control"
            v-model="studio"
            id="studio"
            placeholder="Studio Name"
          />
          <p v-for="error of v$.studio.$errors" :key="error.$uid" class="error">
            <strong>{{ error.$message }}</strong>
          </p>
        </div>
        <button type="submit" class="btn btn-secondary">Create</button>
      </form>
    </div>
  </div>
</template>

<script>
import useValidate from "@vuelidate/core";
import { required, minLength, maxLength } from "@vuelidate/validators";

import sideBar from "@/components/ui/side-bar.vue";
import mainHeading from "@/components/ui/main-heading.vue";

export default {
  components: {
    mainHeading,
    sideBar,
  },
  data() {
    return {
      v$: useValidate(),
      name: "",
      producer: "",
      studio: "",
    };
  },

  created() {},
  validations() {
    return {
      name: {
        required,
        minLength: minLength(4),
        maxLength: maxLength(50),
      },
      producer: { minLength: minLength(4), maxLength: maxLength(50) },
      studio: { required, minLength: minLength(4), maxLength: maxLength(50) },
    };
  },
  methods: {
    addNewClient() {
      this.v$.$validate();
      if (!this.v$.$error) {
        this.secured
          .post("/clients", {
            client: {
              name: this.name,
              studio: this.studio,
              producer: this.producer,
            },
          })
          .then((response) => {
            console.log(response.data);
            this.$router.replace("/clientsView");
          })
          .catch((error) => console.log(error, "Cannot create client"));
      } else {
        console.log("Form cannot be validated");
      }
    },
  },
  computed: {
    loggedIn() {
      return localStorage.signedIn == 1;
    },
  },
};
</script>

<style scoped></style>
