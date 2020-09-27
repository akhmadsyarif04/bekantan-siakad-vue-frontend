<template>
  <div class="about">
    <h1>This is an agama page</h1>
      <div>
        <label class="typo__label">Simple select / dropdown</label>
        <multiselect
        v-model="value"
        :options="items"
        :multiple="true"
        :close-on-select="false"
        :clear-on-select="false"
        :preserve-search="true"
        placeholder="Pick some"
        label="first_name"
        track-by="first_name"
        :preselect-first="true">
          <template slot="selection"
          slot-scope="{ values, isOpen }">
            <span class="multiselect__single" v-if="values.length &amp;&amp; !isOpen">
              {{ values.length }} options selected
            </span>
          </template>
        </multiselect>
        <pre class="language-json"><code>{{ value  }}</code></pre>
      </div>
      <div class="mb-3">
       <input class="form-control" type="text" placeholder="Search" aria-label="Search"/>
      </div>
      <div class="overflow-auto">
      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        aria-controls="my-table"
      ></b-pagination>
      <p class="mt-3">Current Page: {{ currentPage }}</p>
      <b-table
        id="my-table"
        :items="items"
        :per-page="perPage"
        :current-page="currentPage"
        small
      ></b-table>
      </div>
  </div>
</template>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<script>
import Multiselect from 'vue-multiselect'

export default {
  components: {
    Multiselect
  },
  data () {
    return {
      value: [],
      options: [
        { name: 'Vue.js', language: 'JavaScript' },
        { name: 'Adonis', language: 'JavaScript' },
        { name: 'Rails', language: 'Ruby' },
        { name: 'Sinatra', language: 'Ruby' },
        { name: 'Laravel', language: 'PHP' },
        { name: 'Phoenix', language: 'Elixir' }
      ],
      perPage: 3,
      currentPage: 1,
      items: [
        { id: 1, first_name: 'Fred', last_name: 'Flintstone' },
        { id: 2, first_name: 'Wilma', last_name: 'Flintstone' },
        { id: 3, first_name: 'Barney', last_name: 'Rubble' },
        { id: 4, first_name: 'Betty', last_name: 'Rubble' },
        { id: 5, first_name: 'Pebbles', last_name: 'Flintstone' },
        { id: 6, first_name: 'Bamm Bamm', last_name: 'Rubble' },
        { id: 7, first_name: 'The Great', last_name: 'Gazzoo' },
        { id: 8, first_name: 'Rockhead', last_name: 'Slate' },
        { id: 9, first_name: 'Pearl', last_name: 'Slaghoople' }
      ]
    }
  },
  computed: {
    rows () {
      return this.items.length
    }
  }
}
</script>
