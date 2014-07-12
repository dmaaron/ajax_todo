Task.delete_all
Priority.delete_all


p1 = Priority.create(name: 'Emergency', urgency_index: 1, color:'#FF0000')
p2 = Priority.create(name: 'Urgent!', urgency_index: 2, color:'orange')
p3 = Priority.create(name: 'Get this done', urgency_index: 3, color:'yellow')
p4 = Priority.create(name: 'Do whenever', urgency_index: 4, color:'#3AE821')
p5 = Priority.create(name: 'Meh', urgency_index: 5, color:'#1BE8E5')

t1 = Task.create(name: 'Homework', desc: 'Review Ruby Syntax', duedate: '2013-07-01')
t2 = Task.create(name: 'Haircut', desc: 'Go and get a haircut fool!', duedate: '2013-07-05')
t3 = Task.create(name: 'Laundry', desc: 'Pick up from the cleaners', duedate: '2013-07-09')
t4 = Task.create(name: 'Car', desc: 'Take car in for inspection', duedate: '2013-08-01')
t5 = Task.create(name: 'Dog', desc: 'Buy some dog food', duedate: '2013-07-10')
t6 = Task.create(name: 'Project', desc: 'Write down ideas for new project', duedate: '2013-07-02')
t7 = Task.create(name: 'Gym Membership', desc: 'Cancel membership, I never use it', duedate: '2013-07-11')
t8 = Task.create(name: 'Netflix', desc: 'Return movies that I already viewed', duedate: '2013-07-21')
t9 = Task.create(name: 'Cookie', desc: 'Give tanay a cookie', duedate: '2013-07-14')
t10 = Task.create(name: 'Beer', desc: 'Go buy some more beer we are out!', duedate: '2013-08-10')

p1.tasks << t1 << t2
p2.tasks << t3 << t4
p3.tasks << t5 << t6
p4.tasks << t7 << t8
p5.tasks << t9 << t10
