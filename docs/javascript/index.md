# Javascript
- [youtube](https://www.youtube.com/watch?v=ZUHyZHwZtUY&list=WL&index=2&t=0s)
- Use vscode + quokka to see the javascript in action
  - copy code
  - cmd-shift-p "Quokka.js; new javascript file"
  - past code

## tips
- "use strict"; --> requires better coding
- writing functions, use var
  ```js
  var foo = function() {...}
  ```
- filter, map, forEach
    ```js
    var list = [1, 2, 3, 4, 5, 6];

    list.filter(function(e) { return e % 2 == 0; })
        .map(function(e) { return e * 2; })
        .forEach(function(e) { console.log(e); })

    // example of creating new objects with map
    let filters = context.state.searchInput.filters.map(f => {
		return {
			code: f.code,
			values: f.values.map(v => {
				return { code: v.code };
			})
		};
    });
    
    ```
- same in ECMA2015 (arrow functions)
    ```js
    var list = [1, 2, 3, 4, 5, 6];

    list.filter(e => e % 2 == 0)
        .map(e => e * 2)
        .forEach(e => console.log(e));
    ```
- classes(?) (Uppercase first letter function)
  ```js
  var Car = function(year) {
      this.year = year;
  }

  Car.prototype.miles = 0;
  Car.prototype.drive = function(dist) {
      this.miles += dist;
  }

  var car1 = new Car(2015);
  var car2 = new Car(2016);

  console.log(car1.__proto__ === car2.__proto__);

  for (var prop in car1) {
      console.log(prop + ' ' + car1.hasOwnProperty(prop));
  }
  
  car1.drive(10);
  console.log(car1.miles);
  console.log(car2.miles);

  for (var prop in car1) {
      console.log(prop + ' ' + car1.hasOwnProperty(prop));
  }
  ```

- arrow functions --> this is tight to the context of the caller!