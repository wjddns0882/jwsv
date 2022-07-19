<template>
  <div style="max-width: 2000px; margin: auto;">
    <table class="table table-striped" style="text-align: center; border: 1px solid #dddddd">
      <thead>
          <tr>
              <th style="background-color:#eeeeee; text-align: center;">번호</th>
              <th style="background-color:#eeeeee; text-align: center;">제목</th>
              <th style="background-color:#eeeeee; text-align: center;">작성일자</th>
              <th style="background-color:#eeeeee; text-al  ign: center;">조회수</th>
          </tr>
      </thead>
      <tbody>
        <tr v-for="value in todos.reverse()" :key="value.id"  class="tr-body">
          <td>{{value.id}}</td>
          <td @click="title(value)" id="title">{{value.title}}</td>
          <td>{{value.date}}</td>
          <td>{{value.hits}}</td>
        </tr>
      </tbody>

    </table>  
    <button class="btn btn-primary" type="button" id="button" @click="write()">글 작성</button>
  </div>
</template>

<script>

// axios 라이브러리 import
import axios from 'axios'
export default {
  name: 'ListVue',
  data () {
    return {
      todos: []
    }
  },
   mounted() {
    this.getAxios()
  },
  methods: {
    getAxios () {
      axios.get('http://192.168.0.40:4000/todos')
      .then(res =>{
        this.todos = res.data
      })
    },
    write () {
      this.$router.push({
        path: 'create'
      })
    },
    title: function (value) {
      this.countHits(value)
      this.$router.push({
        name: 'detail',
        params: {
          contentId: value.id
        }
      })
    },
    countHits (value) {
      axios.patch('http://192.168.0.40:4000/todos/' + value.id, {
        hits: value.hits + 1
      })
    }
  }
}
</script>

<style>
#button {
    float:right;
}
table {
    width: 100%;
    border: 1px solid #3f3f3f;
    border-collapse: collapse;

}
.tr-body:hover {
    border: 1px solid black;
}
#title:hover {
    color: cyan;
}
</style>
