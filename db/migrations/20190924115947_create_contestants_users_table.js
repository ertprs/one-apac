
exports.up = function(knex) {
  return knex.schema.createTable('contestants_users', (table) => {
    table.increments();
    table.integer('contestant_id');
    table.foreign('contestant_id').references('id').inTable('contestants');
    table.integer('user_id');
    table.foreign('user_id').references('id').inTable('users');
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('contestants_users');
};
