import style from './collection.module.scss';

export default function Collection(props: any){
  return(<ul className={style.ul}>
    {props.elements.map((li:any, index:number) => <li key={'collectionLi'+index}>{li}</li>)}
  </ul>)
}