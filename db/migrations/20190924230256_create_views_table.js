
exports.up = function(knex) {
  return knex.schema.createTable('views', (table) => {
    table.increments();
    table.string('description', 128).notNullable().unique();
    table.integer('views').notNullable().defaultTo(0);
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('views');
};
