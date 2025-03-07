PGDMP  +                    |            tele_kit    16.2    16.2     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    16505    tele_kit    DATABASE     |   CREATE DATABASE tele_kit WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Russian_Russia.1251';
    DROP DATABASE tele_kit;
                postgres    false            �            1259    16506 	   Recipient    TABLE     �  CREATE TABLE public."Recipient" (
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
       public         heap    postgres    false            �            1259    16512    User    TABLE     u  CREATE TABLE public."User" (
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
       public         heap    postgres    false            �            1259    16518    _prisma_migrations    TABLE     �  CREATE TABLE public._prisma_migrations (
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
       public         heap    postgres    false            �          0    16506 	   Recipient 
   TABLE DATA           �   COPY public."Recipient" (id, "lastName", "firstName", "surName", "avatarUrl", "position", department, state, phone, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    215   �       �          0    16512    User 
   TABLE DATA           �   COPY public."User" (id, email, password, "lastName", "firstName", "surName", "avatarUrl", role, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    216   �       �          0    16518    _prisma_migrations 
   TABLE DATA           �   COPY public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;
    public          postgres    false    217   �       &           2606    16546    Recipient Recipient_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public."Recipient"
    ADD CONSTRAINT "Recipient_pkey" PRIMARY KEY (id);
 F   ALTER TABLE ONLY public."Recipient" DROP CONSTRAINT "Recipient_pkey";
       public            postgres    false    215            )           2606    16548    User User_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public."User"
    ADD CONSTRAINT "User_pkey" PRIMARY KEY (id);
 <   ALTER TABLE ONLY public."User" DROP CONSTRAINT "User_pkey";
       public            postgres    false    216            +           2606    16550 *   _prisma_migrations _prisma_migrations_pkey 
   CONSTRAINT     h   ALTER TABLE ONLY public._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);
 T   ALTER TABLE ONLY public._prisma_migrations DROP CONSTRAINT _prisma_migrations_pkey;
       public            postgres    false    217            '           1259    16559    User_email_key    INDEX     K   CREATE UNIQUE INDEX "User_email_key" ON public."User" USING btree (email);
 $   DROP INDEX public."User_email_key";
       public            postgres    false    216            �      x������ � �      �   {  x����n#����S���*�y���8IgR"��[u�3E��$�lg�&@;@��I���J�i��~��E��f��6@H�S
_�8W�s�Q8��a!�/���F�`�;�awt�1a�Q~�P,,�K��H̳3[
�l�i�V��y�ּl����bvWm�x��K�VZ=��]}�z���h�����Ax�zu��+���W �X}�>?:���^0=^?�c,1�`ĥ��x�>J�^�
G� ��g��9�#�J-�1i����ψ Z�9ƃ����>�<r˻L����T�/�����p��E%���vo�+��U��3�=�]�f���G������V���&������'@���� �M��L �0�����Fq&ㄹX��8NH�	1�
{Ja�B�È
�+�hk�����-os4+���Q��Uj��a��ƥ�Ii�KM͢�a��F����n�e%��������'_ \��z�߀��ӿ�o�~��$"gD�)RbM^��*;@��!'*��K>��,�k���0��b;�*������n�����q�<�]�t�v߱�p~6��7�dAՓ���i~q�]�.	71s3{F�|��_>�n�f��ĘQ!�avĦ�T�)s�Ї��
z�G*Ơ�1v<�<'D��6���M+̶���'d��Jԫ����n���N/�����y玶�͚P#SS����מ���,� v�f�q���ol� ��8q�\��!=͋��!�
�m�_['P��ې�����o�+c�vu޴�?h�L�y���v�պOe��#͓n��y0-,�a#�=Z���xW�ߔ��u��e��;��;��P��=Xj��s����m��S�6�F7��<���{�A
�^x�U��Ћ-}#P�).Nä��6�7�:-�au�r���^hJ'Mן��p���\By�G��5��/����W�?�Z��v�?�vt,���	=��h((w�����q�`��Tn�]n����6���L�n��_��	��+�����2�i\fp�+�t��4�h��z s_�m~�گ�ZdrG�5f�}�\���c ��g����X�kGa( d�g<�#�v�s|Q.�KdS��^qV��-���ΐ/�ˍduRc� �7�k���}���_@�ͺ�����,�_O��rm�C$���ՖZJ��{�E����͕ϑJhv��r�F0�<��`�pí��vFg�삙|��g�t�L�]�;r���,]ʚ�Q��φ6��@��C�=Z�}]埾��[��f�[F�4����v��X�C��	&�F�s`<���r_!��]��v��3��f�����x�rݩ1���2��,��\�O�l]dzL����f��;�|���K%hG�("�!�XB]D��zL#�x��c��XBaS���N ��1&���x��R��9�(�n'�m^�6��,�����r<����T0�6�}0l�y{�O�M���W������G�z{(c�wo@J��3�%|\��!=�ph���C�t�!�q�h͹4�{��7�Kf���2o�n7�&z7��zT������`����4�֝�N]��@���rM���)d��'������3��}�ɖS#��<̩"G�> �&�$��Q
���<,,�i�K�*X |K��a����>�'��9��K�ޤ�f.��a���I5l�N�����M.����u��M�vd뿷C�����!ZN��0莙�Z��a�ǹK�:�ǌ�ȳ&�ŐE�A�=vH�S
J	�橻 ֨���i�R�N���y��Gf~/Fw�t=Y?�|����^�/��J��]{��W�1���UlG-��05MYcoo�T3�B���BE+������:��l�w�$����z1s|{Wԥ��R�Z�[V�^%��R��F��y�a��^EG���#Ɵ���:�q�4���&Z����v��F�
�lW
yH�yZ��2�̇J��@+S��Y�l�o��M+�ϼ�m��Sh�n^L��2�sӯ�\�ꤹ������MV.���<����7�>�Xl�a�m�ǻ���%>�1;$&�Β�Ä8��k"|�&p����.~M�g�2�H{�ʤ_3<�Kخ�-�\���Bw�<�A�W��NY������b0��&�����FA
!�9�#�J��_��X�6`      �   �   x�e�K
�0��)�/�>��C���t�U�O�n�������������ݙs� P�����ՈavX訓�d��,�G�������{k���T0pN�9É�
m���z*�v����H�=_��g��][M�czu%�kJ�f�.�     