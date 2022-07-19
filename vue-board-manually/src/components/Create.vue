<!-- 글작성 -->
<template>
  <div style="max-width: 2000px; margin: auto;">
    <div class="form-group">
        <table class="table table-striped" style="text-align: center; border: 1px solid #dddddd;">
        <thead>
          <tr>
            <th colspan="2" style="background-color:#eeeeee; text-align: center;">글쓰기</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><input type="text" class="form-control" placeholder="글 제목" v-model="title"></td>
          </tr>
          <tr>
            <td><input type="text" class="form-control" placeholder="글 내용" style="height:350px;" v-model="content"></td>
          </tr>
        </tbody>
      </table>
      <br><br>
        <botton class="btn btn-success" @click="addTodo()">작성</botton>
        <button class="btn btn-primary" @click="home()">목록</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import dayjs from 'dayjs'
export default {
  name: 'InsertVue',
  data () {
    return {
      id: '',
      title: '',
      date: dayjs().format('YYYY-MM-DD HH:mm:ss'),
      hits: 0,
      content: '',
      todos: []
    }
  },
  methods: {
    addTodo () {
      axios.post('http://192.168.0.40:4000/todos', {
        id: this.id,
        title: this.title,
        date: this.date,
        hits: this.hits,
        content: this.content
      }).then((res) => {
        this.todos.push(res.data)
      })
      this.home()
    },
    home () {
      this.$router.push({
        path: '/'
      })
    }
  },
  components: {
  }
}
</script>
