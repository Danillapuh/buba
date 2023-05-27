import { SelectQueryBuilder } from "typeorm";

export async function pages<Entity>(builder: SelectQueryBuilder<Entity>, page: number, numberOfentities: number) {
    if(page<=0) {page = 1}
    
    let [entities, total] = await builder
    .skip(page > 1 ? (page-1) * numberOfentities : 0)
    .take(numberOfentities)
    .getManyAndCount()
    let pagesLeft = Math.ceil(((total-page*numberOfentities)/(numberOfentities)))
    if(pagesLeft<0){
        return []
    }
  return {total,page: page, pagesLeft: pagesLeft >= 0 ? pagesLeft : 0, pages: Math.ceil((total/numberOfentities)),entities}
  }