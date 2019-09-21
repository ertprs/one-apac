
exports.up = function(knex) {
  return knex.schema.createTable('events', (table) => {
    table.increments();
    table.string('description', 256).notNullable().unique();
    table.string('page_id').notNullable().unique();
    table.integer('icon_id');
    table.foreign('icon_id').references('id').inTable('icons');
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('events');
};
