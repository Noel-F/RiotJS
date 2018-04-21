//: Giphy API Mixin
riot.mixin({

  //:Public API Key
  _key: 'XGlG4epWlbV4Ybsk9EYl685LLKSwK8xt',

  //: API Request url
  _url: 'http://api.giphy.com/v1/gifs/search',

  //: Observable object
  giphy: riot.observable(),

  //: Search method
  giphySearch: function(term) {

    //:Notify of search started
    this.giphy.trigger('start')

    //: Encode search term
    term = encodeURIComponent(term)

    //: Create search url
    let req = `${this._url}?api_key=${this._key}&q={term}`

    //: Create new Request
    let xhr = new XMLHttpRequest()
    xhr.open('GET', req)
    xhr.onload = () => {

      //: Decode response (JSON)
      let res = (xhr.status === 200) ? JSON.parse(xhr.responseText) : null

      //: Notify of new Results
      this.giphy.trigger('complete', res)

    }

    xhr.send()

  }

})
