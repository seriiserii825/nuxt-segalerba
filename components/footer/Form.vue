<template>
  <div class="form">
    <h2 class="form__title">Scrivi ora!</h2>
    <div class="wpcf7">
      <form class="wpcf7-form init">
        <div class="form-group--flex">
          <div class="form-group">
            <input type="text" v-model="form.name" name="your-name" placeholder="Nome"
                   :class="{error: form.name === ''}"/>
            <p v-if="form.name === ''" class="error">Nome obligatorie</p>
          </div>
          <div class="form-group">
            <input type="email" v-model="form.email" name="your-email" placeholder="Email"
                   :class="{error: form.email === ''}"/>
            <p v-if="form.email === ''" class="error">Email obligatorie</p>
          </div>
        </div>
        <div class="form-group">
          <input type="text" v-model="form.subject" name="your-subject" size="40" placeholder="Oggetto"
                 :class="{error: form.subject === ''}"/>
          <p v-if="form.subject === ''" class="error">Oggetto obligatorie</p>
        </div>
        <div class="form-group form-group--textarea">
          <textarea name="your-message" v-model="form.message" cols="40" rows="10" placeholder="Messaggio"
                    :class="{error: form.message === ''}"></textarea>
          <p v-if="form.message === ''" class="error">Messaggio obligatorie</p>
        </div>
        <div class="form-footer">
          <input type="submit" @click.prevent="onSubmit" value="Invia" class="wpcf7-form-control wpcf7-submit"
                 :disabled="submit_disabled"/>
          <div class="privacy">
              <span class="wpcf7-form-control wpcf7-acceptance">
                  <label>
                    <input
                        type="checkbox"
                        name="acceptance-223"
                        value="1"
                        aria-invalid="false"
                        @click="toggleDisabled"
                    />
                    <span class="wpcf7-list-item-label">Cliccando su invia dichiari di aver preso visione e di accettare la nostra <a
                        href="/privacy-policy/" target="_blank">privacy policy</a></span>
                  </label>
                </span>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: "Form",
  props: {
    option: {
      type: Object,
      default: () => {
      },
    },
  },
  data() {
    return {
      form: {
        name: null,
        email: null,
        subject: null,
        message: null,
      },
      submit_disabled: true,
    }
  },
  methods: {
    toggleDisabled() {
      this.submit_disabled = !this.submit_disabled;
    },
    onSubmit() {
      this.form.name === null ? this.form.name = '' : this.form.name;
      this.form.email === null ? this.form.email = '' : this.form.email;
      this.form.subject === null ? this.form.subject = '' : this.form.subject;
      this.form.message === null ? this.form.message = '' : this.form.message;

      const form_is_empty = Object.values(this.form).some(value => value === '');
      if (!form_is_empty) {
        // this.$store.dispatch('sendMail', this.form);
      }
    }
  },
}
</script>
<style lang="scss">
</style>

