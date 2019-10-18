
exports.up = function(knex) {
  return knex.schema.alterTable('views', (table) => {
    table.integer('views').defaultTo(1).alter();
  });
};

exports.down = function(knex) {
  return knex.schema.alterTable('views', (table) => {
    table.integer('views').detaulTo(0).alter();
  });
};
