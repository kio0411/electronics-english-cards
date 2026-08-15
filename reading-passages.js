window.readingPassages = [
  {
    topic: 'LOW-POWER DIGITAL DESIGN',
    title: 'Dynamic Voltage Scaling in a Processor',
    words: 132,
    text: 'Dynamic voltage scaling is widely used to reduce the energy consumption of digital processors. The key observation is that the dynamic power of CMOS logic is approximately proportional to the square of the supply voltage. Therefore, a moderate reduction in voltage can produce a significant energy saving. However, a lower supply voltage also increases circuit delay and reduces timing margin. In a practical design, the control system monitors workload, temperature, and the available timing slack. When the workload is light, the clock frequency and supply voltage can be reduced together. When a performance-intensive task arrives, the system restores a higher operating point. The voltage transition must be carefully managed because an unstable supply can introduce errors or unnecessary power loss. This technique is especially valuable in battery-powered devices, where the operating condition changes frequently during normal use.',
    translation: '动态电压调节广泛用于降低数字处理器的能耗。关键在于，CMOS 逻辑的动态功耗近似与电源电压的平方成正比，因此适度降低电压即可明显节能。但较低的电源电压也会增大电路延迟并减小时间裕量。在实际设计中，控制系统会监测工作负载、温度和可用的时序裕量。负载较轻时，时钟频率与电源电压可同步降低；高性能任务到来时，系统恢复到较高工作点。电压转换必须妥善管理，因为不稳定电源会引入错误或额外功耗。这项技术对电池供电设备尤为重要。',
    keywords: ['dynamic power', 'supply voltage', 'timing margin', 'workload', 'clock frequency']
  },
  {
    topic: 'ANALOG INTEGRATED CIRCUITS',
    title: 'Design Trade-offs in a Low-Noise Amplifier',
    words: 134,
    text: 'A low-noise amplifier is often the first active block in a wireless receiver. Its main task is to amplify a weak input signal while adding as little noise as possible. The design is challenging because noise, gain, linearity, bandwidth, and power consumption are closely related. Increasing the bias current may improve transconductance and reduce input-referred noise, but it also consumes more power. A larger transistor can lower thermal noise, yet its parasitic capacitance may limit the operating bandwidth. Input matching is another important requirement because a mismatch reflects part of the received signal back to the antenna. In practice, designers select the device size, bias point, and matching network together. They then verify the design across process, voltage, and temperature variations. A successful amplifier does not maximize a single parameter; instead, it achieves a balanced performance for the target communication standard.',
    translation: '低噪声放大器通常是无线接收机的第一个有源模块。它的主要任务是在尽可能少引入噪声的同时放大微弱输入信号。设计具有挑战性，因为噪声、增益、线性度、带宽和功耗彼此紧密相关。提高偏置电流可能改善跨导并降低输入参考噪声，但也会增加功耗。较大的晶体管可以降低热噪声，但其寄生电容可能限制工作带宽。输入匹配同样重要，因为失配会使部分接收信号反射回天线。实际中，设计者会一同选择器件尺寸、偏置点和匹配网络，并在工艺、电压和温度变化下验证。成功的放大器并非最大化某一个参数，而是为目标通信标准取得平衡性能。',
    keywords: ['low-noise amplifier', 'input-referred noise', 'transconductance', 'input matching', 'parasitic capacitance']
  },
  {
    topic: 'MEMORY CIRCUITS',
    title: 'Read Stability of an SRAM Cell',
    words: 130,
    text: 'Static random-access memory is widely used in processors because it provides fast access and can be integrated on the same chip as logic circuits. A conventional SRAM bit cell stores data with two cross-coupled inverters and uses access transistors to connect the cell to bit lines. During a read operation, the stored value must remain unchanged even though the internal nodes are disturbed by the bit-line voltage. This requirement is called read stability. As the supply voltage is reduced, the noise margin of the cell becomes smaller, and read failure becomes more likely. Device mismatch caused by manufacturing variation can further increase the failure probability. Designers improve robustness by adjusting transistor ratios, using assist circuits, or adopting alternative bit-cell structures. These solutions may require additional area or control signals, so the memory array must be optimized at both the circuit and architecture levels.',
    translation: '静态随机存取存储器因访问速度快且能与逻辑电路集成在同一芯片上，被广泛用于处理器。传统 SRAM 位单元用两个交叉耦合反相器存储数据，并通过访问晶体管连接到位线。读操作期间，虽然位线电压会扰动内部节点，存储值仍必须保持不变，这一要求称为读稳定性。电源电压降低时，单元噪声裕量变小，读失败更可能发生。制造偏差导致的器件失配会进一步提高失败概率。设计者可以通过调整晶体管尺寸比、使用辅助电路或采用替代位单元结构来提升鲁棒性。这些方案可能增加面积或控制信号，因此存储阵列必须在电路和体系结构层面共同优化。',
    keywords: ['SRAM cell', 'cross-coupled inverter', 'bit line', 'noise margin', 'device mismatch']
  },
  {
    topic: 'MIXED-SIGNAL INTERFACES',
    title: 'A Successive-Approximation ADC',
    words: 129,
    text: 'A successive-approximation-register analog-to-digital converter is popular in sensor interfaces because it offers a good balance among resolution, speed, and power. The converter samples the input voltage and then determines the digital code one bit at a time. At each step, a digital-to-analog converter generates a reference voltage, and a comparator decides whether the input is higher or lower than that reference. The result determines the next trial code. After several comparison cycles, the final code represents the sampled input. Capacitor mismatch in the digital-to-analog converter can create nonlinearity, while comparator offset can shift the decision threshold. Designers use calibration, careful layout, and common-centroid placement to reduce these errors. The sampling switch is also important because charge injection and clock feedthrough can degrade accuracy, especially when the input signal changes rapidly.',
    translation: '逐次逼近寄存器型模数转换器常用于传感器接口，因为它在分辨率、速度和功耗之间具有良好平衡。转换器先对输入电压采样，然后一次确定一位数字码。每一步中，数模转换器产生参考电压，比较器判断输入高于还是低于该参考电压，结果决定下一次试探码。经过若干比较周期后，最终码表示采样输入。数模转换器中的电容失配会造成非线性，比较器失调会移动判决阈值。设计者通过校准、仔细布图和共心布局来减小这些误差。采样开关也很关键，因为电荷注入和时钟馈通会降低精度，尤其在输入信号快速变化时。',
    keywords: ['successive approximation', 'comparator', 'digital-to-analog converter', 'capacitor mismatch', 'charge injection']
  },
  {
    topic: 'VLSI PHYSICAL DESIGN',
    title: 'Interconnect Delay and Clock Distribution',
    words: 131,
    text: 'In deeply scaled integrated circuits, interconnect delay can be comparable to or even larger than gate delay. A long metal wire has resistance and capacitance, so its delay increases with both wire length and load. This effect is particularly important in clock distribution networks, where the clock signal must reach many sequential elements with limited skew. Excessive clock skew can cause setup or hold violations even when the logic path itself is correctly designed. To control delay, physical designers use buffering, wire sizing, shielding, and balanced routing trees. Power delivery must also be considered because simultaneous switching can create voltage drop and noise on the supply network. Modern design flows therefore perform timing analysis, power analysis, and signal-integrity checks repeatedly throughout placement and routing. The final layout is accepted only after it meets these constraints across multiple operating corners.',
    translation: '在深度缩放的集成电路中，互连延迟可以与门延迟相当，甚至更大。长金属线具有电阻和电容，因此其延迟随线长和负载增加而增大。这在时钟分配网络中尤为重要，因为时钟信号必须以有限的偏斜到达众多时序单元。过大的时钟偏斜即使在逻辑路径本身正确时，也可能引起建立时间或保持时间违例。为控制延迟，物理设计人员会采用插入缓冲、线宽调整、屏蔽和均衡布线树等方法。还必须考虑供电，因为同时翻转会在供电网络上造成压降和噪声。现代设计流程因此会在布局布线过程中反复执行时序、功耗和信号完整性检查，最终布局只有在多个工作角下满足约束后才会被接受。',
    keywords: ['interconnect delay', 'clock skew', 'setup violation', 'buffering', 'operating corners']
  },
  {
    topic: 'SEMICONDUCTOR DEVICES',
    title: 'Threshold Voltage Variation in MOSFETs',
    words: 130,
    text: 'Threshold voltage is a fundamental parameter of a MOSFET because it determines when a conducting channel is formed between the source and drain. In nanoscale technologies, threshold voltage varies from one device to another due to random dopant fluctuation, line-edge roughness, and process variation. This variation affects both digital and analog circuits. In digital logic, a higher threshold voltage increases delay, while a lower threshold voltage can increase leakage current. In analog circuits, mismatch between transistors may produce offset and degrade the accuracy of current mirrors or differential pairs. Circuit designers address these issues by selecting appropriate device dimensions, using matched layout techniques, and including sufficient design margin. At the technology level, improved process control and alternative transistor structures can also reduce variability. Understanding this relationship between device physics and circuit behavior is essential for reliable integrated-system design.',
    translation: '阈值电压是 MOSFET 的基本参数，因为它决定源极与漏极之间何时形成导电沟道。在纳米尺度工艺中，由于随机掺杂波动、线边粗糙度和工艺变化，阈值电压会在不同器件之间发生变化。这一变化同时影响数字和模拟电路。对数字逻辑而言，较高阈值电压会增大延迟，较低阈值电压则可能增大漏电流。对模拟电路而言，晶体管之间的失配可能产生失调，并降低电流镜或差分对的精度。电路设计者会选择合适的器件尺寸、使用匹配布局技术并保留足够设计裕量来应对这些问题。在工艺层面，更好的工艺控制和替代晶体管结构也有助于降低变异性。理解器件物理与电路行为之间的关系，对可靠的集成系统设计至关重要。',
    keywords: ['threshold voltage', 'random dopant fluctuation', 'leakage current', 'current mirror', 'design margin']
  },
  {
    topic: 'DESIGN FOR TEST',
    title: 'Scan-Based Testing for Digital Systems',
    words: 136,
    text: 'As the complexity of digital integrated circuits increases, manufacturing defects cannot be detected efficiently by applying only functional test patterns. Scan-based design improves controllability and observability by connecting storage elements into one or more shift registers during test mode. Test patterns are shifted into the scan chains, captured by the combinational logic, and shifted out for comparison with expected responses. This approach allows automatic test-pattern generation tools to target faults systematically. However, scan operation can cause a large amount of switching activity, which may lead to excessive power consumption and voltage drop. Designers therefore use techniques such as scan-chain ordering, clock gating, and test compression to reduce test time and power. A well-designed test architecture must achieve high fault coverage without imposing unacceptable area or performance overhead during normal operation.',
    translation: '随着数字集成电路复杂度的提高，仅施加功能测试向量已无法高效检测制造缺陷。基于扫描的设计通过在测试模式下将存储单元连接成一个或多个移位寄存器，提高了可控性和可观测性。测试向量被移入扫描链，经组合逻辑捕获后再移出，并与期望响应比较。这种方法使自动测试向量生成工具能够系统地针对故障进行测试。然而，扫描操作可能引起大量翻转活动，导致较高功耗和压降。因此，设计者会采用扫描链排序、时钟门控和测试压缩等方法降低测试时间和功耗。良好的测试结构必须实现高故障覆盖率，同时不能在正常工作时带来不可接受的面积或性能开销。',
    keywords: ['scan chain', 'controllability', 'observability', 'fault coverage', 'test compression']
  },
  {
    topic: 'COMPUTER ARCHITECTURE',
    title: 'Network-on-Chip Communication',
    words: 132,
    text: 'Network-on-chip architectures provide a scalable communication fabric for many-core processors and complex systems on chip. Instead of using a shared bus, the system transfers packets through routers and links arranged in a regular topology. This structure can support multiple simultaneous transactions and can be extended as the number of processing elements grows. The performance of a network-on-chip depends on latency, throughput, routing strategy, and buffer management. Congestion occurs when several packets compete for the same link or router output. Adaptive routing can distribute traffic more evenly, but it also increases implementation complexity. Power consumption is another critical concern because routers, buffers, and long interconnects can consume a considerable fraction of total chip power. Designers evaluate traffic patterns early in the architecture stage to balance communication performance, silicon area, and energy efficiency.',
    translation: '片上网络架构为多核处理器和复杂片上系统提供了可扩展的通信结构。系统不再使用共享总线，而是通过以规则拓扑布置的路由器和链路传输数据包。这种结构能够支持多笔事务同时进行，并可随处理单元数量增加而扩展。片上网络的性能取决于延迟、吞吐率、路由策略和缓冲管理。当多个数据包竞争同一链路或路由器输出时，就会发生拥塞。自适应路由可以更均匀地分配流量，但也会增加实现复杂度。功耗同样关键，因为路由器、缓冲区和长互连可能消耗芯片总功耗的很大一部分。设计者会在体系结构阶段尽早评估流量模式，以平衡通信性能、芯片面积和能效。',
    keywords: ['network-on-chip', 'router', 'latency', 'throughput', 'adaptive routing']
  },
  {
    topic: 'AI ACCELERATORS',
    title: 'Compute-in-Memory for Neural Networks',
    words: 135,
    text: 'Neural-network accelerators are often limited by the energy required to move weights and activations between memory and processing units. Compute-in-memory aims to reduce this data movement by performing part of the multiply-accumulate operation within or close to a memory array. In an analog implementation, the conductance of memory devices represents weights, and the array naturally performs a vector-matrix multiplication through physical current summation. This principle can offer high parallelism and low energy per operation. Nevertheless, practical accuracy is affected by device variation, nonlinearity, noise, and analog-to-digital conversion. Peripheral circuits, including drivers, converters, and calibration logic, can also dominate area and power. Current research therefore focuses on co-optimizing algorithms, devices, circuits, and system architecture. The objective is not only to demonstrate efficient computation, but also to maintain accuracy under realistic operating conditions and manufacturing variation.',
    translation: '神经网络加速器的性能常受限于在存储器和处理单元之间移动权重与激活值所需的能量。存内计算试图通过在存储阵列内部或附近完成部分乘累加运算，减少这种数据移动。在模拟实现中，存储器件的电导表示权重，阵列通过物理电流求和自然完成向量-矩阵乘法。这一原理可以提供很高的并行度和很低的单次运算能耗。然而，实际精度会受到器件变异、非线性、噪声以及模数转换的影响。包括驱动器、转换器和校准逻辑在内的外围电路也可能主导面积和功耗。因此，当前研究关注算法、器件、电路和系统架构的协同优化，目标不仅是展示高效计算，也是在真实工作条件和制造变化下保持精度。',
    keywords: ['compute-in-memory', 'multiply-accumulate', 'conductance', 'vector-matrix multiplication', 'calibration']
  },
  {
    topic: 'POWER MANAGEMENT',
    title: 'A Switched-Mode DC-DC Converter',
    words: 131,
    text: 'Switched-mode DC-DC converters are essential in portable and high-performance electronic systems because they can transform supply voltages with high efficiency. A basic buck converter uses power switches, an inductor, and an output capacitor to generate a lower regulated voltage. The control loop senses the output and adjusts the duty cycle so that the average inductor current matches the load demand. Fast transient response is important when a digital load changes abruptly, since a slow loop may allow excessive voltage undershoot or overshoot. At light load, switching loss can become dominant, while at heavy load, conduction loss in the switches and inductor becomes more important. Designers select the switching frequency, inductor value, and compensation network according to the required efficiency, output ripple, and response speed. Stability must be verified across the full input-voltage and load-current range.',
    translation: '开关型 DC-DC 转换器在便携式和高性能电子系统中至关重要，因为它能以高效率变换电源电压。基本降压转换器利用功率开关、电感和输出电容产生较低的稳定电压。控制环路检测输出，并调节占空比，使平均电感电流满足负载需求。当数字负载突然变化时，快速瞬态响应十分重要，因为缓慢的环路可能导致过大的电压下冲或过冲。轻载时开关损耗可能占主导，重载时开关和电感中的导通损耗更重要。设计者会根据效率、输出纹波和响应速度要求来选择开关频率、电感值和补偿网络，并在整个输入电压和负载电流范围内验证稳定性。',
    keywords: ['buck converter', 'duty cycle', 'transient response', 'switching loss', 'output ripple']
  },
  {
    topic: 'RF INTEGRATED CIRCUITS',
    title: 'Phase Noise in a Frequency Synthesizer',
    words: 133,
    text: 'Frequency synthesizers generate stable local-oscillator signals for wireless transceivers. A common implementation uses a phase-locked loop containing a reference source, phase detector, loop filter, voltage-controlled oscillator, and frequency divider. Ideally, the output is a pure periodic waveform at the desired frequency. In practice, random noise sources modulate the phase of the oscillator and create spectral components around the carrier; this phenomenon is known as phase noise. Excessive phase noise can degrade receiver sensitivity and increase error rates in modulated communication systems. The loop bandwidth must be chosen carefully because it determines how reference noise and oscillator noise are transferred to the output. Designers also pay close attention to supply isolation, substrate coupling, and the quality factor of resonant elements. Accurate phase-noise modeling is necessary to predict system performance before tape-out.',
    translation: '频率综合器为无线收发机生成稳定的本振信号。常见实现是包含参考源、鉴相器、环路滤波器、压控振荡器和分频器的锁相环。理想情况下，输出是在目标频率上的纯周期波形。实际上，随机噪声源会调制振荡器的相位，并在载波周围产生频谱分量，这种现象称为相位噪声。过大的相位噪声会降低接收机灵敏度，并提高调制通信系统中的误码率。环路带宽必须谨慎选择，因为它决定参考噪声和振荡器噪声如何传递到输出。设计者还会重点关注电源隔离、衬底耦合和谐振元件的品质因数。准确的相位噪声建模是流片前预测系统性能所必需的。',
    keywords: ['frequency synthesizer', 'phase-locked loop', 'phase noise', 'loop bandwidth', 'voltage-controlled oscillator']
  },
  {
    topic: 'ADVANCED PACKAGING',
    title: 'Thermal Management in Chiplet Systems',
    words: 130,
    text: 'Chiplet-based systems integrate multiple functional dies within a single package and can improve design reuse and yield. However, concentrating several high-power dies in a compact package creates a difficult thermal-management problem. Heat generated in one chiplet can raise the temperature of neighboring chiplets through the package substrate and heat spreader. Higher temperature increases leakage current, may reduce reliability, and can change circuit timing. Thermal analysis therefore begins early in the design process, using power maps and package models to identify hot spots. Possible solutions include redistributing workload, changing die placement, adding thermal vias, and improving the heat sink or cooling path. The electrical and thermal designs must be considered together, since a packaging choice that improves signal bandwidth may also increase local heat density. Reliable chiplet systems require co-design across silicon, package, and cooling technologies.',
    translation: '基于小芯粒的系统在单个封装内集成多个功能裸片，可提高设计复用率和良率。然而，在紧凑封装中集中多个高功耗裸片会带来困难的热管理问题。一个小芯粒产生的热量可通过封装基板和均热板提高相邻小芯粒的温度。更高温度会增加漏电流，可能降低可靠性，并改变电路时序。因此，热分析应在设计早期开始，利用功耗图和封装模型识别热点。可选方案包括重新分配工作负载、调整裸片摆放、增加热通孔，以及改进散热器或冷却路径。电气设计和热设计必须协同考虑，因为改善信号带宽的封装选择也可能增加局部热密度。可靠的小芯粒系统需要在硅、封装和冷却技术之间进行协同设计。',
    keywords: ['chiplet', 'thermal management', 'hot spot', 'thermal via', 'co-design']
  }
];
