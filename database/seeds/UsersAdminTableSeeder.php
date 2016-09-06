<?php

use Illuminate\Database\Seeder;

class UsersAdminTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
			DB::table('users')->insert([
				'name' => 'ramzi',
        'email' => 'potothesecond@gmail.com',
        'password' => bcrypt('secret'),	
				'role' => 'admin' 
			]); 
    }
}
