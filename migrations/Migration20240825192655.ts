import { Migration } from '@mikro-orm/migrations';

export class Migration20240825192655 extends Migration {

  override async up(): Promise<void> {
    this.addSql('create table `product` (`_id` text not null, `title` text not null, `img` text not null, `description` text not null, `price` text not null, primary key (`_id`));');

    this.addSql('create table `cart` (`_id` text not null, `product__id` text not null, `quantity` integer not null, constraint `cart_product__id_foreign` foreign key(`product__id`) references `product`(`_id`) on update cascade, primary key (`_id`));');
    this.addSql('create index `cart_product__id_index` on `cart` (`product__id`);');
  }

}
