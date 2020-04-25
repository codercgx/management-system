const express=require('express')
const app=express()

app.use(require('cors')())
app.use(express.json())

const mongoose =require('mongoose')
mongoose.connect('mongodb://localhost:27017/study',{
    useNewUrlParser: true ,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

const ArticleSchema=new mongoose.Schema({
    title:{type:String},
    body:{type:String}
})
const Article=mongoose.model('Article',ArticleSchema)
app.listen(3003,()=>{
    console.log('http://localhost:3003')
})

app.get('/',async (req,res)=>{
    await res.send('服务器已连接')
})

//创建文章
app.post('/api/articles',async (req,res)=>{
    const article=await Article.create(req.body)
    res.send(article)
})

//获取文章
app.get('/api/articles',async (req,res)=>{
    const articles=await Article.find().limit(10)
    res.send(articles)
})

//删除文章
app.delete('/api/articles/:id',async (req,res)=>{
    await Article.findOneAndDelete(req.params.id)
    res.send({
        success: true
    })
})

//展示文章
app.get('/api/articles/:id',async (req,res)=>{
    const article=await Article.findById(req.params.id)
    res.send(article)
})

//编辑文章
app.put('/api/articles/:id',async (req,res)=>{
    const article =await Article.findOneAndUpdate(req.params.id,req.body)
    res.send(article)
})