<template>
  <div>
    <h1>Menu Component</h1>
    <ul id="menu">
      <li><router-link to="/">Home</router-link> |</li>
      <li><router-link to="/musica"> Musica</router-link> |</li>
      <li><router-link to="/cine"> Cine</router-link> |</li>
      <li><router-link to="/ciclovida"> CicloVida</router-link> |</li>
      <li><router-link to="/directivas"> Directivas</router-link> |</li>
      <li><router-link to="/propiedadconmutada"> Propiedad Conmutada</router-link> |</li>
      <li><router-link to="/numeroparimpar"> Numeroparimpar</router-link> |</li>
      <li><router-link to="/metodofilter"> MetodoFilter</router-link> |</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MenuComponent",
};
</script>

<style>
ul#menu li {
  display: inline;
}
</style>