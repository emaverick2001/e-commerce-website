import { Migration } from '@mikro-orm/migrations';

export class Migration20240825154318 extends Migration {

  override async up(): Promise<void> {
    this.addSql('alter table `cart` drop column `product`;');

    this.addSql('alter table `cart` add column `product__id` text not null constraint `cart_product__id_foreign` references `product` (`_id`) on update cascade;');
    this.addSql('create index `cart_product__id_index` on `cart` (`product__id`);');
  }

}
