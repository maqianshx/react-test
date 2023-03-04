const delay = (ms = 3000) => new Promise(_ => {
  setTimeout(() => {
    _()
  }, ms);
})

module.exports = app => {
  app.get('/api/films', async (req, res) => {
    await delay()
    res.send({
      code: 0,
      msg: req.query,
      data: [
        { id: 1, name: 'aaa' },
        { id: 2, name: 'bbb' },
        { id: 3, name: 'ccc' },
      ]
    })
  })
}