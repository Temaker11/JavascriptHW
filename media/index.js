function media(props) {
  const { array } = props;

  let soma = 0;

  for (let index = 0; index < array.length; index++) {
    soma = soma + array[index];
  }

  return soma / array.length;
}

console.log(media({ array: [5, 7, 9, 6] }));
