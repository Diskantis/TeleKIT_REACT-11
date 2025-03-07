PGDMP  7    9                |            tele_kit    16.1    16.1 %    �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    17221    tele_kit    DATABASE     �   CREATE DATABASE tele_kit WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Belarusian_Belarus.1251';
    DROP DATABASE tele_kit;
                postgres    false            �           0    0    DATABASE tele_kit    COMMENT     1   COMMENT ON DATABASE tele_kit IS 'add avatarUrl';
                   postgres    false    4836            �            1259    17243 	   Recipient    TABLE     �  CREATE TABLE public."Recipient" (
    id text NOT NULL,
    "lastName" text NOT NULL,
    "firstName" text NOT NULL,
    "surName" text,
    "avatarUrl" text,
    "position" text,
    department text,
    state text NOT NULL,
    phone text,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL
);
    DROP TABLE public."Recipient";
       public         heap    postgres    false            �            1259    17235    User    TABLE     u  CREATE TABLE public."User" (
    id text NOT NULL,
    email text NOT NULL,
    password text NOT NULL,
    "lastName" text NOT NULL,
    "firstName" text NOT NULL,
    "surName" text,
    "avatarUrl" text,
    role text NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL
);
    DROP TABLE public."User";
       public         heap    postgres    false            �            1259    17224    _prisma_migrations    TABLE     �  CREATE TABLE public._prisma_migrations (
    id character varying(36) NOT NULL,
    checksum character varying(64) NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) NOT NULL,
    logs text,
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone DEFAULT now() NOT NULL,
    applied_steps_count integer DEFAULT 0 NOT NULL
);
 &   DROP TABLE public._prisma_migrations;
       public         heap    postgres    false            �            1259    17274 
   categories    TABLE     �   CREATE TABLE public.categories (
    id integer NOT NULL,
    name character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.categories;
       public         heap    postgres    false            �            1259    17273    categories_id_seq    SEQUENCE     �   CREATE SEQUENCE public.categories_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.categories_id_seq;
       public          postgres    false    223            �           0    0    categories_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.categories_id_seq OWNED BY public.categories.id;
          public          postgres    false    222            �            1259    17265 
   recipients    TABLE     �  CREATE TABLE public.recipients (
    id integer NOT NULL,
    last_name character varying(255),
    first_name character varying(255),
    sur_name character varying(255),
    "position" character varying(255),
    department character varying(255),
    state character varying(255),
    phone character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.recipients;
       public         heap    postgres    false            �            1259    17264    recipients_id_seq    SEQUENCE     �   CREATE SEQUENCE public.recipients_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.recipients_id_seq;
       public          postgres    false    221            �           0    0    recipients_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.recipients_id_seq OWNED BY public.recipients.id;
          public          postgres    false    220            �            1259    17253    users    TABLE     �  CREATE TABLE public.users (
    id integer NOT NULL,
    email character varying(255),
    password character varying(255),
    last_name character varying(255),
    first_name character varying(255),
    sur_name character varying(255),
    role character varying(255) DEFAULT 'USER'::character varying,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.users;
       public         heap    postgres    false            �            1259    17252    users_id_seq    SEQUENCE     �   CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.users_id_seq;
       public          postgres    false    219            �           0    0    users_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
          public          postgres    false    218            7           2604    17277    categories id    DEFAULT     n   ALTER TABLE ONLY public.categories ALTER COLUMN id SET DEFAULT nextval('public.categories_id_seq'::regclass);
 <   ALTER TABLE public.categories ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    223    222    223            6           2604    17268    recipients id    DEFAULT     n   ALTER TABLE ONLY public.recipients ALTER COLUMN id SET DEFAULT nextval('public.recipients_id_seq'::regclass);
 <   ALTER TABLE public.recipients ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    220    221    221            4           2604    17256    users id    DEFAULT     d   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    219    218    219            �          0    17243 	   Recipient 
   TABLE DATA           �   COPY public."Recipient" (id, "lastName", "firstName", "surName", "avatarUrl", "position", department, state, phone, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    217   �,       �          0    17235    User 
   TABLE DATA           �   COPY public."User" (id, email, password, "lastName", "firstName", "surName", "avatarUrl", role, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    216   �,       �          0    17224    _prisma_migrations 
   TABLE DATA           �   COPY public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;
    public          postgres    false    215   X.       �          0    17274 
   categories 
   TABLE DATA           H   COPY public.categories (id, name, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    223   �.       �          0    17265 
   recipients 
   TABLE DATA           �   COPY public.recipients (id, last_name, first_name, sur_name, "position", department, state, phone, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    221   /       �          0    17253    users 
   TABLE DATA           u   COPY public.users (id, email, password, last_name, first_name, sur_name, role, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    219   2/       �           0    0    categories_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.categories_id_seq', 1, false);
          public          postgres    false    222            �           0    0    recipients_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.recipients_id_seq', 1, false);
          public          postgres    false    220            �           0    0    users_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.users_id_seq', 1, false);
          public          postgres    false    218            >           2606    17250    Recipient Recipient_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public."Recipient"
    ADD CONSTRAINT "Recipient_pkey" PRIMARY KEY (id);
 F   ALTER TABLE ONLY public."Recipient" DROP CONSTRAINT "Recipient_pkey";
       public            postgres    false    217            <           2606    17242    User User_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public."User"
    ADD CONSTRAINT "User_pkey" PRIMARY KEY (id);
 <   ALTER TABLE ONLY public."User" DROP CONSTRAINT "User_pkey";
       public            postgres    false    216            9           2606    17232 *   _prisma_migrations _prisma_migrations_pkey 
   CONSTRAINT     h   ALTER TABLE ONLY public._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);
 T   ALTER TABLE ONLY public._prisma_migrations DROP CONSTRAINT _prisma_migrations_pkey;
       public            postgres    false    215            F           2606    17279    categories categories_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.categories
    ADD CONSTRAINT categories_pkey PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.categories DROP CONSTRAINT categories_pkey;
       public            postgres    false    223            D           2606    17272    recipients recipients_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.recipients
    ADD CONSTRAINT recipients_pkey PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.recipients DROP CONSTRAINT recipients_pkey;
       public            postgres    false    221            @           2606    17263    users users_email_key 
   CONSTRAINT     Q   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);
 ?   ALTER TABLE ONLY public.users DROP CONSTRAINT users_email_key;
       public            postgres    false    219            B           2606    17261    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    219            :           1259    17251    User_email_key    INDEX     K   CREATE UNIQUE INDEX "User_email_key" ON public."User" USING btree (email);
 $   DROP INDEX public."User_email_key";
       public            postgres    false    216            �      x������ � �      �   h  x�u��NAF�٧���ef�3�n�P�D!&fvw� �#�F��066V6�3��J��7r Z`4����|ŗ��u�fI��Y�ʘ�y�X1�$�q�3@i�	N���|�vo���<Q[zOi�m7�\Jj��n�«Iur�Ӝ���n��̝y2�����32��m~e���"�`ςO-x5�6�F�dt8��qfY}@�(�L�Yo4h��Zu��(��b;~
��� 3O��?���)�F@��U��]t6�B-%��w��ya#ӭ�Sv�o�q!)��R'�J�q�g���^s(C�}�BS�3��k��y4���yY��f6������Ӣ߶K_F��%8Ep "���[�$�4 �a�9���8_uS�      �   �   x�e�K
�0��)�/�>��C���t�U�O�n�������������ݙs� P�����ՈavX訓�d��,�G�������{k���T0pN�9É�
m���z*�v����H�=_��g��][M�czu%�kJ�f�.�      �      x������ � �      �      x������ � �      �      x������ � �     