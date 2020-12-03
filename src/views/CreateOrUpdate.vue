<template>
  <div class="about">
    <h1 class="title">
      {{ updated ? "Actualizar usuario" : "Agregar usuario" }}
    </h1>
    <h2 class="subtitle">
      {{ updated ? "Formulario de actualizacion " : "Formulario de creación" }}
    </h2>
    <form class="box" @submit.prevent="save">
      <div class="field">
        <label for="nombre">Nombre</label>
        <input
          v-model="model.firstname"
          type="text"
          name="firstname"
          id="fistname"
          class="input"
          requiered
          placeholder="Ingrese un nombre"
        />
      </div>
      <div class="field">
        <label for="apellido">Apellido</label>
        <input
          v-model="model.lastname"
          type="texr"
          name="apellido"
          id="apellido"
          placeholder="Ingrese un apellido"
          required
          class="input"
        />
      </div>
      <div class="field">
        <label for="correo">Correo</label>
        <input
          v-model="model.email"
          type="email"
          name="correo"
          id="correo"
          placeholder="Ingrese un correo"
          required
          class="input"
        />
      </div>
      <div class="field">
        <label for="cumpleanios">Cumpleaños</label>
        <input
          v-model="model.birthDate"
          type="date"
          name="cumpleanios"
          id="cumpleanios"
          placeholder="Ingrese fecha de nacimiento"
          required
          class="input"
        />
      </div>
      <div class="field">
        <label for="calle">Calle</label>
        <input
          v-model="model.address.street"
          type="text"
          name="calle"
          id="calle"
          placeholder="Ingrese su calle"
          required
          class="input"
        />
      </div>
      <div class="field">
        <label for="ciudad">Ciudad</label>
        <input
          v-model="model.address.city"
          type="text"
          name="ciudad"
          id="ciudad"
          placeholder="Ingrese su ciudad"
          required
          class="input"
        />
      </div>
      <div class="field">
        <label for="pais">País</label>
        <select
          v-model="model.address.country"
          name="pais"
          id="pais"
          required
          class="input"
        >
          <option disabled :value="null">Selecione su pais</option>
          <option v-for="item in items" :key="item" :value="item">
            {{ item }}
          </option>
        </select>
      </div>
      <div class="field">
        <label for="postalcode">Código Postal</label>
        <input
          v-model="model.address.postalcode"
          type="number"
          name="postalcode"
          id="postalcode"
          placeholder="Ingrese su código postal"
          required
          class="input"
        />
      </div>
      <div class="field">
        <button type="submit" class="button is-primary is-rounded is-medium">
          Guardar
        </button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: "CreateOrUpdate",
  data() {
    return {
      model: {
        id: 0,
        firstname: "",
        lastname: "",
        email: "",
        birthDate: "",
        address: {
          id: 0,
          street: "",
          city: "",
          country: "",
          postalcode: 0,
        },
      },
      items: ["ES", "UK", "US", "DE", "PE"],
    };
  },
  computed: {
    updated() {
      if (this.$route.params.id) return true;
      else return false;
    },
  },
  methods: {
    index() {
      let index,
        items = [];
      this.$service.userService.getAll().then((r) => {
        items = r.data;
        index = r.data.length;
        this.model.id = items[index - 1].id + 1;
        this.model.address.id = items[index - 1].id + 1;
      });
    },
    get(id) {
      this.$service.userService.get(id).then((r) => {
        this.model.id = r.data.id;
        this.model.firstname = r.data.firstname;
        this.model.lastname = r.data.lastname;
        this.model.email = r.data.email;
        this.model.birthDate = r.data.birthDate;
        this.model.address.id = r.data.address.id;
        this.model.address.street = r.data.address.street;
        this.model.address.city = r.data.address.city;
        this.model.address.country = r.data.address.country;
        this.model.address.postalcode = r.data.address.postalcode;
      });
    },
    save() {
      if (this.$route.params.id) {
        this.$service.userService
          .update(this.$route.params.id, this.model)
          .then(() => {
            this.$router.push("/");
          });
      } else {
        this.$service.userService.create(this.model).then(() => {
          this.$router.push("/");
        });
      }
    },
  },
  mounted() {
    if (this.$route.params.id) {
      this.get(this.$route.params.id);
    } else {
      this.index();
    }
  },
};
</script>