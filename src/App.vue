<template>
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
    crossorigin="anonymous"
  />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
    integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA=="
    crossorigin="anonymous"
    referrerpolicy="no-referrer"
  />
  <div class="container-fulid">
    <div class="row gx-0">
      <div class="col-2 left-nav">
        <router-link to="/">
          <div class="row">
            <div class="col">Anasayfa</div>
          </div>
        </router-link>
        <router-link to="/like">
          <div class="row">
            <div class="col">Like</div>
          </div>
        </router-link>
        <router-link to="bookmark">
          <div class="row">
            <div class="col">Bookmarks</div>
          </div>
        </router-link>
        <router-link to="/ekle">
          <div class="row">
            <div class="col">Ekle</div>
          </div>
        </router-link>
      </div>
      <div class="col-10 p-5 pt-0">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
