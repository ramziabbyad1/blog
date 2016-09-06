<?php

namespace App\seedhelpers;

class DefaultDataProvider 
{

  /**
   * @var Singleton The reference to *Singleton* instance of this class
   */
  private static $instance;
  
  /**
   * Returns the *Singleton* instance of this class.
   *
   * @return Singleton The *Singleton* instance.
   */
  public static function getInstance()
  {
      if (null === static::$instance) {
          static::$instance = new static();
      }
			//static::$instance->getComparisons();
      return static::$instance;
  }

  /**
   * Protected constructor to prevent creating a new instance of the
   * *Singleton* via the `new` operator from outside of this class.
   */
  protected function __construct()
  {
  }

  /**
   * Private clone method to prevent cloning of the instance of the
   * *Singleton* instance.
   *
   * @return void
   */
  private function __clone()
  {
  }

  /**
   * Private unserialize method to prevent unserializing of the *Singleton*
   * instance.
   *
   * @return void
   */
  private function __wakeup()
  {
  }

	public function getCriteria()
	{
		return [
				[
					'id' => 1,
					'name' => 'A',
					'parent_id' => null,
					'hierarchy_id' => 1
				],
				[
					'id' => 2,
					'name' => 'B',
					'parent_id' => null,
					'hierarchy_id' => 1
				],
				[
					'id' => 3,
					'name' => 'C',
					'parent_id' => null,
					'hierarchy_id' => 1
				],
				[
					'id' => 4,
					'name' => 'A1',
					'parent_id' => 1,
					'hierarchy_id' => 1
				],
				[
					'id' => 5,
					'name' => 'A2',
					'parent_id' => 1,
					'hierarchy_id' => 1
				],
				[
					'id' => 6,
					'name' => 'B1',
					'parent_id' => 2,
					'hierarchy_id' => 1
				],
				[
					'id' => 7,
					'name' => 'B2',
					'parent_id' => 2,
					'hierarchy_id' => 1
				],
				[
					'id' => 8,
					'name' => 'A1-1',
					'parent_id' => 4,
					'hierarchy_id' => 1
				],
				[
					'id' => 9,
					'name' => 'A1-2',
					'parent_id' => 4,
					'hierarchy_id' => 1
				],
				[
					'id' => 10,
					'name' => 'A1-3',
					'parent_id' => 4,
					'hierarchy_id' => 1
				],
				[
					'id' => 11,
					'name' => 'A1-4',
					'parent_id' => 4,
					'hierarchy_id' => 1
				],
				[
					'id' => 12,
					'name' => 'A2-1',
					'parent_id' => 5,
					'hierarchy_id' => 1
				],
				[
					'id' => 13,
					'name' => 'A2-2',
					'parent_id' => 5,
					'hierarchy_id' => 1
				],
				[
					'id' => 14,
					'name' => 'A2-3',
					'parent_id' => 5,
					'hierarchy_id' => 1
				],
				[
					'id' => 15,
					'name' => 'B2-1',
					'parent_id' => 7,
					'hierarchy_id' => 1
				],
				[
					'id' => 16,
					'name' => 'B2-2',
					'parent_id' => 7,
					'hierarchy_id' => 1
				],
				[
					'id' => 17,
					'name' => 'B2-3',
					'parent_id' => 7,
					'hierarchy_id' => 1
				]
			];
	}

	public function getComparisons()
	{
		$criteria = $this->getCriteria();
		echo('criteria');
		var_dump($criteria);
		$criteriaGroups = array();

		foreach ($criteria as $value) 
		{
			$parent_id = $value['parent_id']; 
			echo(empty($criteriaGroups));
			if (array_key_exists($parent_id, $criteriaGroups)) {
				$criteriaGroups[$parent_id][] = $value;			
			}
			else {
				$criteriaGroups[$parent_id] = [$value];				
			}
		}
		echo("criteriaGroups");
		var_dump($criteriaGroups);

		$comparisons = [];
		$index = 0;

		foreach ($criteriaGroups as $parent_id => $children) {
			foreach($children as $child) {
				//echo ('child');
				//var_dump($child);
				$comparisons[count($comparisons)] = [
					'id' => ++$index,
					'comparison' => 1,
					'criteria_id_left' => $child['parent_id'],
					'criteria_id_right' => $child['id']			
				]; 

			}
		}

		echo("comparisons");
		var_dump($comparisons);
		return $comparisons;
	}
	
	

}

//DefaultDataProvider::getInstance();
