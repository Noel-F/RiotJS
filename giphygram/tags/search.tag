<search>
  <form onsubmit="{search}">
    <input ref="search" type="text" placeholder="Search Giphys">
  </form>

  <script>

    //: Tag Mounted
    this.on('mount', () => {
      //Focus search field
      this.refs.search.focus()
    })

    //: Search submit handler
    this.search = (e) => {
      e.preventDefault()

      let term = this.refs.search.value

      //: Get search term
      this.giphySearch(term)

    }
  </script>

  <style>
    input::placeholder {
      font-weight: 100;
      font-style: italic;
    }
  </style>
</search>
