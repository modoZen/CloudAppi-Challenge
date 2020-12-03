<template>
  <div class="home">
    <h1 class="title">Lista de usuarios</h1>
    <h2 class="subtitle">Visualización</h2>
    <div class="field has-text-right">
      <router-link to="/Create" class="button is-primary is-medium">
        <span class="icon">
          <i class="fa fa-plus"></i>
        </span>
        <span>Crear nuevo</span>
      </router-link>
    </div>
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <td class="has-text-centered">Nombre</td>
          <td class="has-text-centered">Apellido</td>
          <td class="has-text-centered">Correo</td>
          <td class="has-text-centered">Cumpleaños</td>
          <td class="has-text-centered">Calle</td>
          <td class="has-text-centered">Ciudad</td>
          <td class="has-text-centered">País</td>
          <td class="has-text-centered">Código Postal</td>
          <td class="has-text-centered">Editar</td>
          <td class="has-text-centered">Eliminar</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.id">
          <td class="has-text-centered">
            {{ item.firstname }}
          </td>
          <td class="has-text-centered">{{ item.lastname }}</td>
          <td class="has-text-centered">{{ item.email }}</td>
          <td class="has-text-centered">{{ item.birthDate }}</td>
          <td class="has-text-centered">{{ item.address.street }}</td>
          <td class="has-text-centered">{{ item.address.city }}</td>
          <td class="has-text-centered">{{ item.address.country }}</td>
          <td class="has-text-centered">{{ item.address.postalcode }}</td>
          <td class="has-text-centered">
            <router-link :to="`/Update/${item.id}`">
              <span class="icon"><i class="far fa-edit"></i></span>
            </router-link>
          </td>
          <td class="has-text-centered">
            <a @click="eliminate(item)">
              <span class="icon"><i class="fas fa-trash-alt"></i></span>
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "UserIndex",
  components: {},
  data() {
    return {
      items: [],
    };
  },
  methods: {
    getAll() {
      this.$service.userService.getAll().then((r) => {
        this.items = r.data;
      });
    },
    eliminate(x) {
      console.log(x.id);
      this.$service.userService.eliminate(x.id).then(() => {
        console.log("usuario eliminado");
        this.getAll();
      });
    },
  },
  mounted() {
    this.getAll();
  },
};
</script>
