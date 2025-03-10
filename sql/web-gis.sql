PGDMP                          }            gis    14.15    14.15     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    20607    gis    DATABASE     a   CREATE DATABASE gis WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'Turkish_T�rkiye.1254';
    DROP DATABASE gis;
                postgres    false                        3079    20662    postgis 	   EXTENSION     ;   CREATE EXTENSION IF NOT EXISTS postgis WITH SCHEMA public;
    DROP EXTENSION postgis;
                   false            �           0    0    EXTENSION postgis    COMMENT     ^   COMMENT ON EXTENSION postgis IS 'PostGIS geometry and geography spatial types and functions';
                        false    2            �            1259    21734    question    TABLE     �   CREATE TABLE public.question (
    id integer NOT NULL,
    qtext text,
    answer text,
    latitude double precision,
    longitude double precision,
    geom public.geometry(Point,4326)
);
    DROP TABLE public.question;
       public         heap    postgres    false    2    2    2    2    2    2    2    2            �            1259    21733    question_id_seq    SEQUENCE     �   CREATE SEQUENCE public.question_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.question_id_seq;
       public          postgres    false    218            �           0    0    question_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.question_id_seq OWNED BY public.question.id;
          public          postgres    false    217            �            1259    20644    user    TABLE     �   CREATE TABLE public."user" (
    id integer NOT NULL,
    username text,
    email text,
    password text,
    isadmin boolean DEFAULT false
);
    DROP TABLE public."user";
       public         heap    postgres    false            �            1259    20643    user_id_seq    SEQUENCE     �   CREATE SEQUENCE public.user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 "   DROP SEQUENCE public.user_id_seq;
       public          postgres    false    211            �           0    0    user_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.user_id_seq OWNED BY public."user".id;
          public          postgres    false    210            �           2604    21737    question id    DEFAULT     j   ALTER TABLE ONLY public.question ALTER COLUMN id SET DEFAULT nextval('public.question_id_seq'::regclass);
 :   ALTER TABLE public.question ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    217    218    218            �           2604    20647    user id    DEFAULT     d   ALTER TABLE ONLY public."user" ALTER COLUMN id SET DEFAULT nextval('public.user_id_seq'::regclass);
 8   ALTER TABLE public."user" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    211    210    211            �          0    21734    question 
   TABLE DATA           P   COPY public.question (id, qtext, answer, latitude, longitude, geom) FROM stdin;
    public          postgres    false    218   �       �          0    20983    spatial_ref_sys 
   TABLE DATA           X   COPY public.spatial_ref_sys (srid, auth_name, auth_srid, srtext, proj4text) FROM stdin;
    public          postgres    false    213   �       �          0    20644    user 
   TABLE DATA           H   COPY public."user" (id, username, email, password, isadmin) FROM stdin;
    public          postgres    false    211   
       �           0    0    question_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.question_id_seq', 46, true);
          public          postgres    false    217            �           0    0    user_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.user_id_seq', 26, true);
          public          postgres    false    210                       2606    21741    question question_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.question
    ADD CONSTRAINT question_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.question DROP CONSTRAINT question_pkey;
       public            postgres    false    218            �           2606    20652    user user_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public."user" DROP CONSTRAINT user_pkey;
       public            postgres    false    211            �   M  x����n#�Eש�����Ǌ��L�{z��x0�I�e�,��]$��|�o��ע��X�Ȍ�{��z��~3�6�C�y�.�y~߼����\���uN;R�:>�D��*�	��P�o|q����V��D�91�%5:S�J'i%��+�~���0>��qG�:�~�y8�s"�v�N��tTh�p
[|�T�\�H7�'�X1R
�B�<ŧi���	>�D��(�)j$�ҎqcN�C�B3�
��UɁ�Px���r�	B?��~~��;Q�S�0�I���yQܪ��Fq{�Er��;�2��s}�;�X��H�I���:��R�U,�]�Q�1x&U�E%5B땡�L���|��;���0�I��BX*���KnK��0�������a�ʰ���<�w��[F"i'��d+:C�R�K֪�,QeFS�V��h�	ulWF��yF���t��q��:n�#L����t���RCi\W�5Ez!Y�wn�������#_.�"+��,���,Ef4�`|��ZWQ��͉��3�gtus����e�z%¡���4��,U�Df�H�q %!��Jy '��M�l-`��rD������8�}mW��MwnQ�"�"�M΄�J����"ږ�;��,��O�&���=�:)�&[�j.�DVX��+gu��F�^���!�,��_����ڎ�՟Ñl��,׆l��g�=��K�����&�d��άT����ck��ۤ�x��q����&�9]���P��(�L
W(G66r����k.�8�6~�{�6??����V�N�'d�l',��sL$*e���h����РLWٱ������4��z��c�pJ�ZB8wK��8O�	B�vs}J0ҡ�ΰ=�M/�ӎ��~�#r�uh�P;���#��9�-�Fk��bd�U%Y�Z�R'�aF�����L�RI�PK�c�>���i�JV^FՈ���X˜/�{���z�?���|�3Lh"u��Z�9�K�P����H�6����ذ��W���eG~;��X�}��#�_�(<K��$�8U����,���7����s?���|��ι��|��hf'�?r���D�*�4�ru|-����T1p���}nge��2e<8�Ff+e�ph���-�Z�y�u����v�G�,�( 7K~��d��H?$(tCNN%]�����pzlV�~�ϗ�zl>�0��m������F�Q_Ûo,��E��u�����t��>O�[��ĔmE�-�[��q��2�|��1�?��Zൌ��?����/�x���eր�|�a��:Y�r�i�)�ʫ�W��[?*�#�_����ڜ5C��]R����rR�I���xq�7|-�����a:Bjo��[�Ec:��vi��bF���1�S\:�,���k��Z��>����T�q��PP�+�	��h=P�L��`�Q ������M�g��a_a�?��_D�N0l-R�1z	.Z[��J)��vS���s�z�m�W���I@�����ɯ�|��wR���b������v���xk�D�+��Z�}8�k}ly��/��܆���Ũ3#�,��e���m�%��*���n�XK�X��T��������k��S��b{^��g�M���#C�8����=��_���
_U����?��WX[����^�6�a�m�{��P+/�і�"��X�O�+����/�����x�� ���!8T>��g�rX1B��n[������?�h6�o}��o�e�۶_����ʤ�)�iq-��"R;�Z��\�]���屶�nG���y�hl`�%��V���k��N��������[��b�����i���J��COK3s�ײPJ(w�����-      �      x������ � �      �   ]   x�34�LL��̃�`R/9?�S�(I��@%أ̷(�$?*�/�B?�8*�$ǳ�U�L?)��($ 0��*��"Ϲ8� �Ĩ2���̙��+F��� �S�     