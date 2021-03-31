const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.allTitles = function(){
  const titles = this.films.map((film) => {
    return film.title;
  });
  return titles;
};

Cinema.prototype.findByTitle = function(title) {
  const found = this.films.filter((film) => {
    return film.title === title;
  })
  return found;
}

Cinema.prototype.findByGenre = function(genre) {
  const found = this.films.filter((film) => {
    return film.genre === genre;
  })
  return found;
}

Cinema.prototype.anyFilmsInYear = function(year) {
  return this.films.includes(year);
}

Cinema.prototype.allFilmsLongerThan = function(time) {
  return this.films.every(film => film.length > time);
}

Cinema.prototype.totalFilmLength = function() {
  const totaller = this.films.reduce((runningTotal, film) => {
    return runningTotal + film.length;
  }, 0);
  return totaller;
};

Cinema.prototype.findByProperty = function(property, value) {
  const found = this.films.filter((film) => {
    return film[property] === value ;
  })
  return found;
};


module.exports = Cinema;
