<?php

use Illuminate\Database\Seeder;

class DefaultHierarchySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
			DB::table('hierarchies')->insert([
				'name' => 'default'
			]); 
    }
}
