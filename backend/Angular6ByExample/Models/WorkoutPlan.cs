using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Angular6ByExample.Models
{
    public class WorkoutPlan
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int RestBetweenExercise { get; set; }
        public List<Exercise> Exercises { get; set; }
    }
}
