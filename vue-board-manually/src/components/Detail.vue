<template>
  <div  style="max-width: 2000px; margin: auto;">
    <table class="table table-striped" style="text-align: center; border: 1px solid #dddddd">
      <thead>
        <tr>
          <th colspan="3" style="background-color:#eeeeee; text-align: center;">게시판 글보기</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="width:20%;">제목</td>
          <td colspan="2">{{list.title}}</td>
        </tr>
        <tr>
          <td>작성일자</td>
          <td colspan="2">{{list.date}}</td>
        </tr>
        <tr>
          <td>조회수</td>
          <td colspan="2">{{list.hits}}</td>
        </tr>
        <tr>
          <td>내용</td>
          <td colspan="2" style="mon-height:200px; text-align:left;">{{list.content}}</td>
        </tr>
      </tbody>
    </table>
    <div class="text-right">
      <a type="button" class="btn btn-primary" @click="home()">목록</a>
      <a type="button" class="btn btn-info" @click="updateList()">수정</a>
      <a type="button" class="btn btn-danger" @click="deleteList()">삭제</a>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'DetailVue',
  data () {
    return {
      value: this.$route.params.contentId,
      list: ''
    }
  },
  mounted () {
    this.getAxios()
  },
  methods: {
    getAxios () {
      axios.get('http://192.168.0.40:4000/todos?id=' + this.value)
      .then(res => {
        this.todos = res.data
        this.list = this.todos[0]
      })
    },
    home () {
      this.$router.push({
        path: '/'
      })
    },
    deleteList () {
      if(confirm('정말로 지우시겠습니까?')){
      axios.delete('http://192.168.0.40:4000/todos/' + this.value)
      this.home()
      }
    },
    updateList () {
      this.$router.push({
        name: 'update',
        params: {
          contentId: this.value
        }
      })
    }
  }
}
</script>

<style>
.text-right {
    float: right;
}
</style>
