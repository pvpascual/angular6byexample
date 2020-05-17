using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Angular6ByExample.Models
{
    public class Exercise
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Duration { get; set; }
        public WorkoutPlan WorkoutPlan { get; set; }
    }
}
