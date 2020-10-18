<template>
  <div id="app">
      <div class="City" id="City">
          <div class="frame" id=location>Погода в городе Ростов-на-Дону</div>
        </div>
            <div id="nav">
      <router-link to="/">Today</router-link> |
      <router-link to="/about">Week</router-link>
    </div>
    <router-view/>
    </div>
</template>

<style>
body {
 background-image: url(components/sky.jpg) ;
 }

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}

#nav {
  padding: 30px;
  font-size: 50px;
}

#nav a {
  font-size: 50px;
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color:white;
}

.City .frame {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-family: 'Roboto Condensed', sans-serif;
}

.City .frame {
  position: relative;
  background-color: #FFF;
  flex-direction: column;
  box-sizing: border-box;
  padding: 30px;
  text-align: center;
  font-family: sans-serif;
  z-index: 2;
}
.City,
.City .frame {
  box-shadow: 0 0 2px #BFE2FF, 0 0 5px rgba(0, 0, 0, 0.2), inset 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
}

#location{

  text-align: center;
  font-size: 60px;
  font-weight: bold;

}

.City {
  width: 1200px;
  height: 200px;
  box-sizing: border-box;
  padding: 15px;
  position: relative;
  overflow: hidden;
  margin: 30px auto;
}
</style>
