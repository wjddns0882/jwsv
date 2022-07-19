<!-- 글수정 -->
<template>
  <div class="todoApp">
    <div class="form-group">
        <table class="table table-striped" style="text-align: center; border: 1px solid #dddddd;">
        <thead>
          <tr>
            <th colspan="2" style="background-color:#eeeeee; text-align: center;">글수정</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><input type="text" class="form-control" placeholder="글 제목" v-model="result.title"></td>
          </tr>
          <tr>
            <td><input type="text" class="form-control" placeholder="글 내용" style="height:350px;" v-model="result.content"></td>
          </tr>
        </tbody>
      </table>
        <br><br>
        <botton class="btn btn-success" @click="update()">수정</botton>
        <button class="btn btn-primary" @click="home()">목록</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import dayjs from 'dayjs'
export default {
  name: 'UpdateVue',
  data () {
    return {
      contentId: this.$route.params.contentId,
      date: dayjs().format('YYYY-MM-DD HH:mm:ss'),
      result: ''
    }
  },
  mounted () {
    this.getAxios()
  },
  methods: {
    getAxios () {
      axios.get('http://192.168.0.40:4000/todos?id=' + this.contentId)
      .then(response => {
        this.results = response.data
        this.result = this.results[0]
      })
    },
    update () {
      axios.patch('http://192.168.0.40:4000/todos/' + this.contentId, {
        title: this.result.title,
        date: this.date,
        content: this.result.content
      })
      this.home()
    },
    home () {
      this.$router.push({
        path: '/'
      })
    }
  }
}
</script>
