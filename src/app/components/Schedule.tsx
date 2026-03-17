import { motion } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Calendar, Clock } from "lucide-react";

export function Schedule() {
  const schedule = [
    { day: "Monday", time: "6:00 AM", class: "Sunrise Vinyasa", instructor: "Sarah" },
    { day: "Monday", time: "6:00 PM", class: "Restorative Yoga", instructor: "Michael" },
    { day: "Wednesday", time: "9:00 AM", class: "Prenatal Yoga", instructor: "Emma" },
    { day: "Wednesday", time: "7:00 PM", class: "Advanced Flow", instructor: "Sarah" },
    { day: "Friday", time: "6:00 AM", class: "Meditation & Mindfulness", instructor: "Michael" },
    { day: "Friday", time: "5:30 PM", class: "Beginner Friendly", instructor: "Emma" },
    { day: "Saturday", time: "10:00 AM", class: "Hatha Yoga", instructor: "Michael" },
    { day: "Sunday", time: "9:00 AM", class: "Sunday Slow Flow", instructor: "Sarah" },
  ];

  return (
    <section id="schedule" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-6 text-foreground" style={{ fontWeight: 300 }}>
            Schedule & Booking
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find the perfect class time and reserve your spot in our upcoming sessions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Schedule */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  Weekly Schedule
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {schedule.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors"
                    >
                      <div className="flex-1">
                        <p className="font-medium text-foreground">{item.class}</p>
                        <p className="text-sm text-muted-foreground">with {item.instructor}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-foreground">{item.day}</p>
                        <p className="text-sm text-muted-foreground flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {item.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle>Book a Class</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="Enter your name" className="bg-input-background" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      className="bg-input-background"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="class">Select Class</Label>
                    <Select>
                      <SelectTrigger id="class" className="bg-input-background">
                        <SelectValue placeholder="Choose a class" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sunrise">Sunrise Vinyasa</SelectItem>
                        <SelectItem value="restorative">Restorative Yoga</SelectItem>
                        <SelectItem value="prenatal">Prenatal Yoga</SelectItem>
                        <SelectItem value="advanced">Advanced Flow</SelectItem>
                        <SelectItem value="meditation">Meditation & Mindfulness</SelectItem>
                        <SelectItem value="beginner">Beginner Friendly</SelectItem>
                        <SelectItem value="hatha">Hatha Yoga</SelectItem>
                        <SelectItem value="sunday">Sunday Slow Flow</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="date">Preferred Date</Label>
                    <Input id="date" type="date" className="bg-input-background" />
                  </div>

                  <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                    Reserve Your Spot
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
