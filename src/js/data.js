const data = fetch('./js/data/injuries/injuries.json').then(res => res.json());
export function year() {
  data.then(datos => {
    datos.map(function(element) {
      console.log(element.Year);
      return element.year;
    });
  });
}
year();
