<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Comparisons extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
		{
			if(Schema::hasTable('criteria')) {

      	Schema::create('comparisons', function (Blueprint $table) {
      	  $table->increments('id');
      	  $table->float('comparison')->default(1);
					$table->integer('criteria_id_left')
								->unsigned()->nullable();
					$table->foreign('criteria_id_left')
								->references('id')->on('criteria')
								->onDelete('cascade');
					$table->integer('criteria_id_right')
								->unsigned()->nullable();
					$table->foreign('criteria_id_right')
								->references('id')->on('criteria')
								->onDelete('cascade');
				});
			}
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
		{
			Schema::drop('comparisons');
    }
}
