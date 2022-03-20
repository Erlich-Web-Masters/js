let user = "      Erlich", 
	correo = "erlich.habana@gmail.com                ";


console.log(user);
console.log(user.trim());
console.log(user.trim().split(" "))	;
console.log(user.includes("Erlich"));
correo = correo.trim();
console.log(correo);
console.log(`La varible ${correo} tiene ${correo.length} caracteres`);

console.log(user.toUpperCase());

console.log(user.trim().repeat(3));