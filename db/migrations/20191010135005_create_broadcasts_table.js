
exports.up = function(knex) {
  return knex.schema.createTable('broadcasts', (table) => {
    table.increments();
    table.string('description', 256).notNullable().unique();
    table.string('message', 2048).notNullable();
    table.integer('event_id');
    table.foreign('event_id').references('id').inTable('event');
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('broadcasts');
};
