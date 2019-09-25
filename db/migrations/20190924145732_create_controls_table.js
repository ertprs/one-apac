
exports.up = function(knex) {
  return knex.schema.createTable('controls', (table) => {
    table.increments();
    table.string('description', 128).notNullable().unique();
    table.boolean('active').notNullable().defaultTo(false);
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('controls');
};
