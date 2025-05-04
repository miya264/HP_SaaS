import React from 'react';
import Section from '../components/Section';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Lightbulb, 
  Target, 
  Shield, 
  Users, 
  ArrowRight 
} from 'lucide-react';

const About: React.FC = () => {
  React.useEffect(() => {
    document.title = '会社概要 - InsightSync';
  }, []);

  const values = [
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "イノベーション",
      description: "AIの可能性を追求し、組織の働き方を本質的に変革するソリューションを生み出します。"
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "お客様志向",
      description: "私たちの開発は常に、お客様が直面するリアルな課題の理解から始まります。"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "信頼とセキュリティ",
      description: "大切な組織データを最高水準のセキュリティとプライバシーで守ります。"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "協働",
      description: "人とAIが協力し合うことで、最良の成果が生まれると信じています。"
    }
  ];

  const team = [
    {
      name: "田中 明",
      role: "代表取締役・共同創業者",
      bio: "大手AI企業でプロダクトVPを歴任。エンタープライズソフトウェアとAI分野で15年以上の経験を持つ。",
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "エマ・チェン",
      role: "CTO・共同創業者",
      bio: "MITで機械学習の博士号を取得。独自AIモデルの開発をリード。",
      image: "https://images.pexels.com/photos/773371/pexels-photo-773371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "山本 博",
      role: "チーフAIオフィサー",
      bio: "フォーチュン500企業でAI研究を主導。自然言語処理と会話分析の専門家。",
      image: "https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "サラ・ジョンソン",
      role: "カスタマーサクセス担当VP",
      bio: "エンタープライズSaaS分野で10年以上の経験。顧客のROI最大化を支援。",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <Section
        title="私たちのミッション"
        subtitle="人とAIの協働で、組織の意思決定を進化させる未来を創造します。"
        className="pt-12"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-primary-950">
              人とAIが共に創る新しい価値
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              InsightSyncは2022年、「人の知見とAIの力を融合し、より良い意思決定を支援する」という明確なビジョンのもと設立されました。
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              日々のコミュニケーションの中で埋もれがちな貴重な知見を、テクノロジーの力で引き出し、整理し、必要な情報として活用できる世界を目指しています。
            </p>
            <p className="text-gray-600 leading-relaxed">
              AI・自然言語処理・エンタープライズソフトウェアの専門家が集い、既存の業務フローに自然に溶け込むソリューションを開発しています。
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-xl overflow-hidden shadow-xl"
          >
            <img 
              src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Team collaboration" 
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </Section>

      {/* Our Values */}
      <Section
        title="私たちの価値観"
        subtitle="私たちの行動指針・大切にしている考え方"
        className="bg-gray-50"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: '-100px' }}
              className="bg-white p-8 rounded-xl shadow-lg border border-gray-100"
            >
              <div className="bg-primary-50 w-14 h-14 rounded-lg flex items-center justify-center text-primary-600 mb-6">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary-950">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Timeline */}
      <Section
        title="歩み"
        subtitle="AIビジネスインテリジェンス分野で業界をリードするまでの道のり"
      >
        <div className="relative">
          {/* Connection line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-primary-200 transform -translate-x-1/2 hidden md:block z-0"></div>
          
          <div className="space-y-16">
            {[
              {
                year: "2022",
                title: "創業",
                description: "田中明・エマ・チェンが、AIによる意思決定改革の可能性を信じてInsightSyncを設立。",
                align: "left"
              },
              {
                year: "2023",
                title: "初プロダクトリリース",
                description: "1年の開発期間を経て、会議インテリジェンスと要約生成に特化した最初の製品をリリース。",
                align: "right"
              },
              {
                year: "2024",
                title: "シリーズA資金調達",
                description: "エンジニアリング・カスタマーサクセス体制強化のため、1,200万ドルの資金調達を実施。",
                align: "left"
              },
              {
                year: "2025",
                title: "グローバル展開",
                description: "現在は東京・サンフランシスコ・ロンドンに拠点を持ち、世界中の組織を支援。",
                align: "right"
              }
            ].map((milestone, index) => (
              <div key={index} className={`relative z-10 flex items-center ${milestone.align === 'right' ? 'md:flex-row-reverse' : ''}`}>
                <motion.div
                  initial={{ opacity: 0, x: milestone.align === 'left' ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true, margin: '-100px' }}
                  className="flex-1"
                >
                  <div className={`bg-white p-8 rounded-xl shadow-lg border border-gray-100 ${milestone.align === 'right' ? 'md:mr-16' : 'md:ml-16'}`}>
                    <span className="inline-block px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium mb-4">
                      {milestone.year}
                    </span>
                    <h3 className="text-xl font-bold mb-3 text-primary-950">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </motion.div>
                
                <div className="hidden md:flex relative">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    viewport={{ once: true, margin: '-100px' }}
                    className="bg-primary-500 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold z-10"
                  >
                    {index + 1}
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Team Section */}
      <Section
        title="私たちのチーム"
        subtitle="InsightSyncを支える情熱的な専門家たち"
        className="bg-gray-50"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: '-100px' }}
              className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100"
            >
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1 text-primary-950">{member.name}</h3>
                <p className="text-primary-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-xl font-bold mb-4 text-primary-950">一緒に働きませんか？</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            私たちはAIやソフトウェア開発、組織変革に情熱を持つ仲間を常に募集しています。
          </p>
          <Link to="/contact" className="btn btn-primary inline-flex items-center">
            採用情報を見る
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </Section>

      {/* Contact CTA */}
      <Section
        title=""
        className="gradient-bg text-white py-20"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            意思決定の未来を共に創りませんか？
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            ご質問や、私たちのミッション・ソリューションについて詳しく知りたい方はお気軽にご連絡ください。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn btn-primary bg-white text-primary-950 hover:bg-gray-100">
              お問い合わせ
            </Link>
            <Link to="/services" className="btn btn-secondary border-white hover:bg-white/10">
              サービスを見る
            </Link>
          </div>
        </motion.div>
      </Section>
    </div>
  );
};

export default About;