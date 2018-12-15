<template>
  <ul class="nav nav-pills outline-active">
    
      <li class="nav-item">
        <router-link :to="{name: 'MyArticles'}" exact-active-class="active" class="nav-link" append>Articles</router-link>
      </li>
      
      <li class="nav-item">
        <router-link :to="{name: 'MyFavorite'}" exact-active-class="active" class="nav-link" append>
          Favorites
        </router-link>
      </li>
   
  </ul>
</template>