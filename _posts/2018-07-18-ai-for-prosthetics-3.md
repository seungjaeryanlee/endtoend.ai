---
layout: post
title: "AI for Prosthetics Week 3-4: Understanding the Observation Space"
author: Seungjae Ryan Lee
permalink: /blog/ai-for-prosthetics-3/
redirect_from:
 - /blog/ai-for-prosthetics-4

front_image: /assets/blog/ai-for-prosthetics-3/front.png
front_text: >
    The observation can be roughly divided into five components: the body parts,
    the joints, the muscles, the forces, and the center of mass. For each body
    part component, the agent observes its position, velocity, acceleration,
    rotation, rotational velocity, and rotational acceleration.

nav:
- name: Observation
  permalink: '#observation'
- name: osim-rl-helper
  permalink: '#osim-rl-helper'
- name: What's Next?
  permalink: '#whats-next'
---

## Weeks

- [Week 1: Understanding the Challenge](/blog/ai-for-prosthetics-1)
- [Week 2: Understanding the Action Space](/blog/ai-for-prosthetics-2)
- **Week 3 - 4: Understanding the Observation Space**
- [Week 5: Understanding the Reward](/blog/ai-for-prosthetics-5)
- [Week 6 - 8: General Techniques of RL](/blog/ai-for-prosthetics-6)



## Observation

![]({{ "/assets/blog/ai-for-prosthetics-3/observation.png" | absolute_url }})

*Note: Currently, the default observation style is `project=True`, where a list is returned as an observation. However, the default will be changed to `project=False`, where a dictionary is returned, in the next release. If you don't know what `project` does, check my [Week 1 post](/blog/ai-for-prosthetics-1)!* 

The observation can be divided into five components: the body parts, the joints, the muscles, the forces, and the center of mass. For each *body part* component, the agent observes its position, velocity, acceleration, rotation, rotational velocity, and rotational acceleration. Similarly, for each *joint*, the agent observes its position, velocity and acceleration. For each *muscle*, the agent observes its activation, fiber force, fiber length and fiber velocity. The *force* component describes the forces acting on body parts. Finally, the agent observes the position, velocity, and acceleration of its *center of mass*.

```python
{
    'body_acc': {
        'calcn_l': [1253.688828798722, 453.4117256205009, -462.8844724817433],
        'femur_l': [3552.7596723666466, 102.32773696018921, -24.14590774460615],
        'femur_r': [3577.2392919297267, 97.2556003736695, -24.14590774460615],
        'head': [-2151.6179549639746, 247.21132544086612, -5.651007630868147],
        'pelvis': [3021.7003234669214, 680.8998459553628, -32.50184112628757],
        'pros_foot_r': [2097.069790884677, 407.6437699668757, 985.199411865104],
        'pros_tibia_r': [-7206.973998543474, 407.6437699668757, 459.98267021582114],
        'talus_l': [1326.619748123917, 365.89822770528855, -448.4463030305569],
        'tibia_l': [-5893.369348915658, 365.89822770528855, -227.17211746475732],
        'toes_l': [1250.10882643996, 148.06830447245676, -490.1229719729977],
        'torso': [2351.823145970354, -146.7888874667765, -15.265452971775463]
    },
    'body_acc_rot': {
        'calcn_l': [514.5911292227897, 146.58454828192848, -1710.8455233087516],
        'femur_l': [514.5911292227897, 146.58454828192848, -23292.824849203236],
        'femur_r': [-1221.434282905309, 146.5845482819343, -26557.63606714429],
        'head': [30.372075368382077, 146.58454828191628, 8219.35187112352],
        'pelvis': [30.372075368382077, 146.58454828191628, 8219.351871123528],
        'pros_foot_r': [-1221.434282905309, 146.5845482819343, 2218.8731787441284],
        'pros_tibia_r': [-1221.434282905309, 146.5845482819343, 21637.311138205005],
        'talus_l': [514.5911292227897, 146.58454828192848, -1710.8455233087516],
        'tibia_l': [514.5911292227897, 146.58454828192848, 16790.672318696685],
        'toes_l': [514.5911292227897, 146.58454828192848, -1710.8455233087516],
        'torso': [30.372075368382077, 146.58454828191628, 8219.35187112352]
    },
    'body_pos': {
        'calcn_l': [-0.123969856517536, 0.006129303551649576, -0.09142],
        'femur_l': [-0.0707, 0.8738999999999999, -0.0835],
        'femur_r': [-0.0707, 0.8738999999999999, 0.0835],
        'head': [-0.052764320996907754, 1.5694070821576522, 0.0],
        'pelvis': [0.0, 0.94, 0.0],
        'pros_foot_r': [-0.07519985651753601, 0.04807930355164958, 0.0835],
        'pros_tibia_r': [-0.07519985651753601, 0.47807930355164957, 0.0835],
        'talus_l': [-0.07519985651753601, 0.04807930355164958, -0.0835],
        'tibia_l': [-0.07519985651753601, 0.47807930355164957, -0.0835],
        'toes_l': [0.05483014348246398, 0.004129303551649576, -0.0925],
        'torso': [-0.1007, 1.0214999999999999, 0.0]
    },
    'body_pos_rot': {
        'calcn_l': [-0.0, 0.0, -0.0],
        'femur_l': [-0.0, 0.0, -0.0],
        'femur_r':[-0.0, 0.0, -0.0],
        'head': [-0.0, 0.0, -0.0872665],
        'pelvis': [-0.0, 0.0, -0.0],
        'pros_foot_r': [-0.0, 0.0, -0.0],
        'pros_tibia_r': [-0.0, 0.0, -0.0],
        'talus_l': [-0.0, 0.0, -0.0],
        'tibia_l': [-0.0, 0.0, -0.0],
        'toes_l': [-0.0, 0.0, -0.0],
        'torso': [-0.0, 0.0, -0.0872665]
    },
    'body_vel': {
        'calcn_l': [0.0, 0.0, 0.0],
        'femur_l': [0.0, 0.0, 0.0],
        'femur_r': [0.0, 0.0, 0.0],
        'head': [0.0, 0.0, 0.0],
        'pelvis': [0.0, 0.0, 0.0],
        'pros_foot_r': [0.0, 0.0, 0.0],
        'pros_tibia_r': [0.0, 0.0, 0.0],
        'talus_l': [0.0, 0.0, 0.0],
        'tibia_l': [0.0, 0.0, 0.0],
        'toes_l': [0.0, 0.0, 0.0],
        'torso': [0.0, 0.0, 0.0]
    },
    'body_vel_rot': {
        'calcn_l': [0.0, 0.0, 0.0],
        'femur_l': [0.0, 0.0, 0.0],
        'femur_r': [0.0, 0.0, 0.0],
        'head': [0.0, 0.0, 0.0],
        'pelvis': [0.0, 0.0, 0.0],
        'pros_foot_r': [0.0, 0.0, 0.0],
        'pros_tibia_r': [0.0, 0.0, 0.0],
        'talus_l': [0.0, 0.0, 0.0],
        'tibia_l': [0.0, 0.0, 0.0],
        'toes_l': [0.0, 0.0, 0.0],
        'torso': [0.0, 0.0, 0.0]
    },
    'forces': {
        'AnkleLimit_l': [0.0, 0.0],
        'AnkleLimit_r': [0.0, 0.0],
        'HipAddLimit_l': [0.0, 0.0],
        'HipAddLimit_r': [0.0, 0.0],
        'HipLimit_l': [0.0, 0.0],
        'HipLimit_r': [0.0, 0.0],
        'KneeLimit_l': [-0.0, 0.0],
        'KneeLimit_r': [-0.0, 0.0],
        'abd_l': [0.0],
        'abd_r': [0.0],
        'add_l': [0.0],
        'add_r': [0.0],
        'ankleSpring': [-0.0],
        'bifemsh_l': [6084.326590359711],
        'bifemsh_r': [6084.326590359711],
        'foot_l': [-1.7615592933859115e-12, -504.53063397142085, 0.0, -46.45915575255036, 1.622112753284362e-13, -4.943148065393853, 6.786660275561278e-13, 194.37767574636297, 0.0, 0.0, 0.0, 5.831330272390875, 1.0828932658297836e-12, 310.1529582250579, 0.0, 0.0, 0.0, 6.203059164501164, 1.0828932658297836e-12, 310.1529582250579, 0.0, 0.0, 0.0, 6.203059164501164],
        'gastroc_l': [0.0],
        'glut_max_l': [147037.7044007947],
        'glut_max_r': [147037.7044007947],
        'hamstrings_l': [0.0],
        'hamstrings_r': [0.0],
        'iliopsoas_l': [21479.14279626967],
        'iliopsoas_r': [21479.14279626967],
        'pros_foot_r_0': [-1.3573320551122304e-12, -388.7553514927188, 0.0, 32.46107184964201, -1.1333722660187127e-13, 3.726164264482634, 1.3573320551122304e-12, 388.7553514927188, 0.0, 0.0, 0.0, 25.50818238819416, 1.3573320551122304e-12, 388.7553514927188, 0.0, 0.0, 0.0, 25.50818238819416],
        'rect_fem_l': [0.0],
        'rect_fem_r': [0.0],
        'soleus_l': [0.0],
        'tib_ant_l': [0.0],
        'vasti_l': [0.0],
        'vasti_r': [0.0]
    },
    'joint_acc': {
        'ankle_l': [-18501.517842005436],
        'ankle_r': [-19418.437959460876],
        'back': [-1.000444171950221e-11],
        'back_0': [],
        'ground_pelvis': [8219.351871123528, 30.372075368382077, 146.58454828191628, 3021.7003234669214, 680.8998459553628, -32.50184112628757],
        'hip_l': [-31512.176720326766, -484.21905385440766, -1.2192913345643319e-11],
        'hip_r': [-34776.98793826782, -1251.806358273691, 1.801936377887614e-11],
        'knee_l': [40083.49716789992],
        'knee_r': [48194.947205349294],
        'mtp_l': [],
        'subtalar_l': []
    },
    'joint_pos': {
        'ankle_l': [0.0],
        'ankle_r': [0.0],
        'back': [-0.0872665],
        'back_0': [],
        'ground_pelvis': [0.0, 0.0, 0.0, 0.0, 0.94, 0.0],
        'hip_l': [0.0, 0.0, 0.0],
        'hip_r': [0.0, 0.0, 0.0],
        'knee_l': [0.0],
        'knee_r': [0.0],
        'mtp_l': [],
        'subtalar_l': []
    },
    'joint_vel': {
        'ankle_l': [0.0],
        'ankle_r': [0.0],
        'back': [0.0],
        'back_0': [],
        'ground_pelvis': [0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
        'hip_l': [0.0, 0.0, 0.0],
        'hip_r': [0.0, 0.0, 0.0],
        'knee_l': [0.0],
        'knee_r': [0.0],
        'mtp_l': [],
        'subtalar_l': []
    },
    'markers': {},
    'misc': {
        'mass_center_acc': [-4.001157926055469e-13, 2.5708322099694465],
        'mass_center_pos': [-0.08466565561225976, 0.9952730567231536],
        'mass_center_vel': [0.0, 0.0]
    },
    'muscles': {
        'abd_l': { 'activation': 0.05, 'fiber_force': 1.547474121413317e-14, 'fiber_length': 0.1, 'fiber_velocity': -1.326540950462705 },
        'abd_r': { 'activation': 0.05, 'fiber_force': 1.547474121413317e-14, 'fiber_length': 0.1, 'fiber_velocity': -1.326540950462705 },
        'add_l': { 'activation': 0.05, 'fiber_force': 0.0, 'fiber_length': 0.1, 'fiber_velocity': -1.0367973163843414 },
        'add_r': { 'activation': 0.05, 'fiber_force': 0.0, 'fiber_length': 0.1, 'fiber_velocity': -1.0367973163843414 },
        'bifemsh_l': { 'activation': 0.05, 'fiber_force': 6738.484542501806, 'fiber_length': 0.1, 'fiber_velocity': 379.68284762694003 },
        'bifemsh_r': { 'activation': 0.05, 'fiber_force': 6738.484542501806, 'fiber_length': 0.1, 'fiber_velocity': 379.68284762694003 },
        'gastroc_l': { 'activation': 0.05, 'fiber_force': 0.0, 'fiber_length': 0.1, 'fiber_velocity': -3481.201038861244 },
        'glut_max_l': { 'activation': 0.05, 'fiber_force': 147037.7044007947, 'fiber_length': 0.1, 'fiber_velocity': 2608.0828361198787 },
        'glut_max_r': { 'activation': 0.05, 'fiber_force': 147037.7044007947, 'fiber_length': 0.1, 'fiber_velocity': 2608.0828361198787 },
        'hamstrings_l': { 'activation': 0.05, 'fiber_force': 0.0, 'fiber_length': 0.1, 'fiber_velocity': -5.221454250202676 },
        'hamstrings_r': { 'activation': 0.05, 'fiber_force': 0.0, 'fiber_length': 0.1, 'fiber_velocity': -5.221454250202676 },
        'iliopsoas_l': { 'activation': 0.05, 'fiber_force': 21769.687084250327, 'fiber_length': 0.1, 'fiber_velocity': 276.6184843761971 },
        'iliopsoas_r': { 'activation': 0.05, 'fiber_force': 21769.687084250327, 'fiber_length': 0.1, 'fiber_velocity': 276.6184843761971 },
        'rect_fem_l': { 'activation': 0.05, 'fiber_force': 0.0, 'fiber_length': 0.1, 'fiber_velocity': -0.4092974568990915 },
        'rect_fem_r': { 'activation': 0.05, 'fiber_force': 0.0, 'fiber_length': 0.1, 'fiber_velocity': -0.4092974568990915 },
        'soleus_l': { 'activation': 0.05, 'fiber_force': 0.0, 'fiber_length': 0.1, 'fiber_velocity': -190146.97438065815 },
        'tib_ant_l': { 'activation': 0.05, 'fiber_force': 0.0, 'fiber_length': 0.1, 'fiber_velocity': -16.394217173963888 },
        'vasti_l': { 'activation': 0.05, 'fiber_force': 0.0, 'fiber_length': 0.1, 'fiber_velocity': -0.427439106952905 },
        'vasti_r': { 'activation': 0.05, 'fiber_force': 0.0, 'fiber_length': 0.1, 'fiber_velocity': -0.427439106952905 }
    }
}
```

Above is an observation dictionary for the initial state. The magnitude of numbers vary greatly. The $y$ position of body parts stay close to the interval $[0, 1]$, whereas body parts' accelerations or muscles' fiber forces have a magnitude of a few tens of thousands. Some of these numbers might be due to muscles not being equilibrated when the simulation is initialized ([Issue #133](https://github.com/stanfordnmbl/osim-rl/issues/133)), but still normalizing the observation might be well worth the effort.

Also, all the positions in the observation are absolute positions, but we are more interested in their positions relative to the pelvis for their $x$ and $z$ coordinates. If the head is behind the pelvis, the agent will likely fall behind, regardless of its absolute position, whereas if the head is in front of the pelvis, the agent will likely fall forward or run. Thus, the $x$ and $z$ coordinates for each body part should be shifted by that of the pelvis.

Note that the center of mass currently only has two coordinates: this is due to a bug as mentioned in [Issue #129](https://github.com/stanfordnmbl/osim-rl/issues/129), and will be fixed in the next update.

If you would like to learn more about the observation dictionary, visit the [official documentation page](http://osim-rl.stanford.edu/docs/nips2018/observation/).



## osim-rl-helper

### DictToList

The original `DictToList` wrapper simply used  `ProstheticsEnv.get_observation()` function to convert a `dict`-type observation to a `list`. However, this function does not take into account most $z$ coordinates. Thus, the  `DictToList` wrapper has been renamed to `DictToListLegacy` . Instead, I created a `DictToListFull` wrapper that converts the observation to a `list` without any preprocessing. The function in the wrapper that reformats the observation is shown below.

```python
def _dict_to_list(self, state_desc):
    res = []

    # Body Observations
    for info_type in ['body_pos', 'body_pos_rot',
                      'body_vel', 'body_vel_rot',
                      'body_acc', 'body_acc_rot']:
        for body_part in ['calcn_l', 'talus_l', 'tibia_l', 'toes_l',
                          'femur_l', 'femur_r', 'head', 'pelvis',
                          'torso', 'pros_foot_r', 'pros_tibia_r']:
            res += state_desc[info_type][body_part]

    # Joint Observations
    # Neglecting `back_0`, `mtp_l`, `subtalar_l` since they do not move
    for info_type in ['joint_pos', 'joint_vel', 'joint_acc']:
        for joint in ['ankle_l', 'ankle_r', 'back', 'ground_pelvis',
                      'hip_l', 'hip_r', 'knee_l', 'knee_r']:
            res += state_desc[info_type][joint]

    # Muscle Observations
    for muscle in ['abd_l', 'abd_r', 'add_l', 'add_r', 
                   'bifemsh_l', 'bifemsh_r', 'gastroc_l',
                   'glut_max_l', 'glut_max_r', 
                   'hamstrings_l', 'hamstrings_r',
                   'iliopsoas_l', 'iliopsoas_r', 'rect_fem_l', 'rect_fem_r',
                   'soleus_l', 'tib_ant_l', 'vasti_l', 'vasti_r']:
        res.append(state_desc['muscles'][muscle]['activation'])
        res.append(state_desc['muscles'][muscle]['fiber_force'])
        res.append(state_desc['muscles'][muscle]['fiber_length'])
        res.append(state_desc['muscles'][muscle]['fiber_velocity'])

    # Force Observations
    # Neglecting forces corresponding to muscles as they are redundant with
    # `fiber_forces` in muscles dictionaries
    for force in ['AnkleLimit_l', 'AnkleLimit_r',
                  'HipAddLimit_l', 'HipAddLimit_r',
                  'HipLimit_l', 'HipLimit_r', 'KneeLimit_l', 'KneeLimit_r']:
        res += state_desc['forces'][force]

        # Center of Mass Observations
        res += state_desc['misc']['mass_center_pos']
        res += state_desc['misc']['mass_center_vel']
        res += state_desc['misc']['mass_center_acc']

    return res
```

### Interaction Monitor

![]({{ "/assets/blog/ai-for-prosthetics-3/monitor.gif" | absolute_url }})

I added a Jupyter Notebook that allows you to monitor the interactions between the agent and the environment. You can use it with any `agent` that returns a valid action when `agent.act(observation)` is called. You can customize what to monitor: any combination of observation, reward and action is possible!



## What's Next?

I was busy the last couple of weeks, mostly redesigning my blog (hope you like it!) and doing some research. Next week, I will check the reward space and try tweaking the rewards, which should finish the overview of the environment.

In a couple of weeks, the environment will be updated for Round 2, where the agent must follow a random velocity vector. The few leftover bugs in the environment would also be fixed then (Issues [#129](https://github.com/stanfordnmbl/osim-rl/issues/129), [#133](https://github.com/stanfordnmbl/osim-rl/issues/133)). I will spend the first week reviewing the changes and updating `osim-rl-helper` accordingly. Afterwards, I will be testing my ideas by training agents on cloud instances.

