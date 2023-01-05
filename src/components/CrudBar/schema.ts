import * as Yup from 'yup';

export const CrudSchema = ()=> Yup.object({
    name: Yup.string()
    .min(3, "Sua compra tem um nome melhor né?")
    .nullable()
    .required("Sua compra precisa de um nome"),

    count: Yup.number()
    .required("Insira a quantidade da compra")
    .nullable()
    .positive("Insira um número positivo para quantidade")
    .max(99,'Não são muitos itens?')
    .integer("Que compra estranha..."),
  });