export function setLocation(weather){
    return weather.city.name;
};

export function setPresentTemp(weather){
    const wtr = Math.round(weather.list[0].main.temp - 273);
    return wtr;
};

export function setMausam(weather){
    return weather.list[0].weather[0].main;
};

export function setClassName(weather){
    if (weather.city !== undefined) {
      const wtr = Math.round(weather.list[0].main.temp - 273);
      if (wtr < 7) {
        return "fullscreen content";
      } else if (wtr >= 7 && wtr < 28) {
        return "fullscreen content spring";
      } else {
        return "fullscreen content warm";
      }
    } else {
      return "fullscreen content";
    }
};

export function setDay1(weather){
    const wtr = Math.round(weather.list[1].main.temp - 273);
    return wtr;
};

export function setDay2(weather){
    const wtr = Math.round(weather.list[2].main.temp - 273);
    return wtr;
};

export function setDay3(weather){
    const wtr = Math.round(weather.list[3].main.temp - 273);
    return wtr;
  };

export function setDay4(weather){
    const wtr = Math.round(weather.list[4].main.temp - 273);
    return wtr;
  };

export function setDay5(weather){
    const wtr = Math.round(weather.list[5].main.temp - 273);
    return wtr;
};

export function setClassImg1(weather){
    if (weather.list[1].weather[0].main === "Clouds") {
      return "nxtimg mausam1 rainy";
    }else if(weather.list[1].weather[0].main === "Snow"){
        return "nxtimg mausam1 snow";
    }else {
      return "nxtimg mausam1";
    }
  };

export function setClassImg2(weather){
    if (weather.list[2].weather[0].main === "Clouds") {
      return "nxtimg mausam2 rainy";
    }else if(weather.list[2].weather[0].main === "Snow"){
        return "nxtimg mausam2 snow";
    } else {
      return "nxtimg mausam2";
    }
  };

  export function setClassImg3(weather){
    if (weather.list[3].weather[0].main === "Clouds") {
      return "nxtimg mausam3 rainy";
    }else if(weather.list[3].weather[0].main === "Snow"){
        return "nxtimg mausam3 snow";
    }else {
      return "nxtimg mausam3";
    }
  };

  export function setClassImg4(weather){
    if (weather.list[4].weather[0].main === "Clouds") {
      return "nxtimg mausam4 rainy";
    }else if(weather.list[4].weather[0].main === "Snow"){
        return "nxtimg mausam4 snow";
    }else {
      return "nxtimg mausam4";
    }
  };

  export function setClassImg5(weather){
    if (weather.list[5].weather[0].main === "Clouds") {
      return "nxtimg mausam5 rainy";
    }else if(weather.list[5].weather[0].main === "Snow"){
        return "nxtimg mausam5 snow";
    }else {
      return "nxtimg mausam5";
    }
  };
