<template>
  <div>
      <input type="number" step="1" v-on:input="onInput"/>
      <p v-show="loading"><b>Carregando...</b></p>
      <Output :output="output" />
  </div>
</template>

<script>
import Output from './Output';

export default {
    name: "Form",
    components: {
        Output
    },
    data: () => {return {
        loading: false,
        output: ""
    }},
    methods: {
        onInput (ev) {
            let value = ev.target.value.replace(/\D/g, "");
            if (!value) {
                this.output = "Not found";
                return;
            }
            this.loading = true;
            fetch("http://5db6fce5e2c76f0014a539bd.mockapi.io/api/aula/v1/Get/" + value, {
                method: "GET",
                headers: {
                    Accept: "application/json",
                }
            })
            .then(r => r.json()
            .then(json => {
                this.loading = false;
                this.output = JSON.stringify(json, null, 4);
            }))
            .catch(er => {
                this.loading = false;
                window.console.warn(er);
            });
        }
    }
};

</script>
