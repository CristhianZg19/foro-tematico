INSERT INTO `users` (`id`, `username`, `password`, `role`, `created_at`) VALUES
(1, 'test1@gmail.com', '$2a$10$tmDGdpGQu.G/KGDfehnjvOd/hC9r.C.aYg5eJLnSKzLIdQr2K5Acq', 'user', '2024-11-11 01:30:36'),
(2, 'ana.martinez@gmail.com', '$2a$10$tmDGdpGQu.G/KGDfehnjvOd/hC9r.C.aYg5eJLnSKzLIdQr2K5Acq', 'user', '2024-11-11 01:30:36'),
(3, 'pedro.gonzalez@gmail.com', '$2a$10$tmDGdpGQu.G/KGDfehnjvOd/hC9r.C.aYg5eJLnSKzLIdQr2K5Acq', 'user', '2024-11-11 01:30:36'),
(4, 'luisa.hernandez@gmail.com', '$2a$10$tmDGdpGQu.G/KGDfehnjvOd/hC9r.C.aYg5eJLnSKzLIdQr2K5Acq', 'user', '2024-11-11 01:30:36'),
(5, 'jose.rodriguez@gmail.com', '$2a$10$tmDGdpGQu.G/KGDfehnjvOd/hC9r.C.aYg5eJLnSKzLIdQr2K5Acq', 'user', '2024-11-11 01:30:36'),
(6, 'maria.lópez@gmail.com', '$2a$10$tmDGdpGQu.G/KGDfehnjvOd/hC9r.C.aYg5eJLnSKzLIdQr2K5Acq', 'user', '2024-11-11 01:30:36'),
(7, 'carla.sanchez@gmail.com', '$2a$10$tmDGdpGQu.G/KGDfehnjvOd/hC9r.C.aYg5eJLnSKzLIdQr2K5Acq', 'user', '2024-11-11 01:30:36'),
(8, 'roberto.diaz@gmail.com', '$2a$10$tmDGdpGQu.G/KGDfehnjvOd/hC9r.C.aYg5eJLnSKzLIdQr2K5Acq', 'user', '2024-11-11 01:30:36'),
(9, 'carlos.morales@gmail.com', '$2a$10$tmDGdpGQu.G/KGDfehnjvOd/hC9r.C.aYg5eJLnSKzLIdQr2K5Acq', 'user', '2024-11-11 01:30:36'),
(10, 'elena.garcia@gmail.com', '$2a$10$tmDGdpGQu.G/KGDfehnjvOd/hC9r.C.aYg5eJLnSKzLIdQr2K5Acq', 'user', '2024-11-11 01:30:36'),
(11, 'marcos.martinez@gmail.com', '$2a$10$tmDGdpGQu.G/KGDfehnjvOd/hC9r.C.aYg5eJLnSKzLIdQr2K5Acq', 'user', '2024-11-11 01:30:36'),
(12, 'paula.rodriguez@gmail.com', '$2a$10$tmDGdpGQu.G/KGDfehnjvOd/hC9r.C.aYg5eJLnSKzLIdQr2K5Acq', 'user', '2024-11-11 01:30:36'),
(13, 'manuel.jimenez@gmail.com', '$2a$10$tmDGdpGQu.G/KGDfehnjvOd/hC9r.C.aYg5eJLnSKzLIdQr2K5Acq', 'user', '2024-11-11 01:30:36'),
(14, 'sonia.perez@gmail.com', '$2a$10$tmDGdpGQu.G/KGDfehnjvOd/hC9r.C.aYg5eJLnSKzLIdQr2K5Acq', 'user', '2024-11-11 01:30:36'),
(15, 'victor.silva@gmail.com', '$2a$10$tmDGdpGQu.G/KGDfehnjvOd/hC9r.C.aYg5eJLnSKzLIdQr2K5Acq', 'user', '2024-11-11 01:30:36'),
(16, 'test2@gmail.com', '$2a$10$tmDGdpGQu.G/KGDfehnjvOd/hC9r.C.aYg5eJLnSKzLIdQr2K5Acq', 'admin', '2024-11-11 01:32:46');



INSERT INTO `forum_posts` (`id`, `user_id`, `title`, `content`, `created_at`) VALUES
(1, 1, 'Impacto de la Inteligencia Artificial en el Empleo', 'La inteligencia artificial está cambiando rápidamente muchos sectores. ¿Qué opinas sobre su impacto en los trabajos tradicionales?', '2024-11-11 01:31:05'),
(2, 2, 'El Futuro de la Energía Renovable', 'Las energías renovables están avanzando a un ritmo acelerado. ¿Cómo crees que influirán en la economía global?', '2024-11-11 01:31:05'),
(3, 3, 'La Sostenibilidad en la Moda', '¿La moda sostenible es el futuro de la industria? ¿Qué marcas están liderando el camino?', '2024-11-11 01:31:05'),
(4, 4, 'La Evolución de la Medicina Digital', 'La telemedicina y las aplicaciones de salud están transformando el acceso a la atención médica. ¿Qué piensas sobre este cambio?', '2024-11-11 01:31:05'),
(5, 5, 'El Teletrabajo Después de la Pandemia', 'El teletrabajo parece ser una tendencia que llegó para quedarse. ¿Cómo ha afectado tu productividad?', '2024-11-11 01:31:05'),
(6, 6, 'La Popularidad de las Criptomonedas', 'Las criptomonedas están tomando protagonismo en los mercados financieros. ¿Es este el futuro del dinero?', '2024-11-11 01:31:05'),
(7, 7, 'El Cambio Climático y sus Efectos Globales', 'El cambio climático está siendo un desafío mundial. ¿Qué soluciones globales crees que deberían implementarse urgentemente?', '2024-11-11 01:31:05'),
(8, 8, 'Educación en Línea: Pros y Contras', 'La educación en línea ha ganado popularidad, pero también trae retos. ¿Cómo ves el futuro de la educación digital?', '2024-11-11 01:31:05'),
(9, 9, 'El Renacer del Espacio: ¿Qué Sigue para la Exploración Espacial?', 'Los avances en la exploración espacial están en su punto más alto. ¿Cuál es el próximo gran paso para la humanidad en el espacio?', '2024-11-11 01:31:05'),
(10, 10, 'Redes Sociales: ¿Son una Herramienta o un Riesgo para la Salud Mental?', 'Las redes sociales tienen un gran impacto en nuestra vida diaria, pero ¿cómo afectan nuestra salud mental a largo plazo?', '2024-11-11 01:31:05'),
(11, 11, 'La Revolución de los Vehículos Autónomos', '¿Qué tan cerca estamos de ver vehículos completamente autónomos en nuestras carreteras? ¿Estás preparado para este cambio?', '2024-11-11 01:31:05'),
(12, 12, 'El Crecimiento de la Inteligencia Artificial Generativa', '¿Cómo crees que la inteligencia artificial generativa, como los modelos de lenguaje, cambiará las industrias creativas?', '2024-11-11 01:31:05'),
(13, 13, 'El Ascenso de los Videojuegos como Deporte Profesional', 'Los eSports han ganado enorme popularidad en los últimos años. ¿Es este el futuro del entretenimiento digital?', '2024-11-11 01:31:05'),
(14, 14, 'Salud Mental en la Era Digital', 'La conexión constante a través de dispositivos digitales está afectando nuestra salud mental. ¿Qué estrategias podrían ayudarnos a encontrar el equilibrio?', '2024-11-11 01:31:05');


INSERT INTO `comments` (`id`, `post_id`, `user_id`, `content`, `created_at`) VALUES
(1, 1, 3, 'Es impresionante cómo la inteligencia artificial está revolucionando todos los sectores, especialmente la medicina. ¡Grandes avances por venir!', '2024-11-11 01:31:14'),
(2, 1, 5, 'Totalmente de acuerdo, lo que se está logrando con el uso de la IA es algo que antes parecía ciencia ficción. ¡Espero ver cómo evoluciona!', '2024-11-11 01:31:14'),
(3, 2, 8, 'La sostenibilidad es un tema crucial hoy en día. Los gobiernos deben hacer más para fomentar el uso de energías renovables.', '2024-11-11 01:31:14'),
(4, 2, 4, 'Este es un tema importante, pero creo que la implementación de soluciones verdes aún está en sus primeras etapas. Hay mucho por hacer.', '2024-11-11 01:31:14'),
(5, 3, 10, 'Es fascinante ver cómo las nuevas tecnologías de baterías están cambiando el panorama de la movilidad eléctrica. Esto va a impulsar aún más el mercado.', '2024-11-11 01:31:14'),
(6, 3, 1, 'Estoy esperando ver más modelos de autos eléctricos con mejor autonomía. Eso será clave para el éxito de estos vehículos a largo plazo.', '2024-11-11 01:31:14'),
(7, 4, 6, 'La crisis climática es una realidad que no podemos seguir ignorando. Necesitamos medidas drásticas ahora.', '2024-11-11 01:31:14'),
(8, 4, 2, 'Cada vez es más evidente que los desastres naturales están siendo más frecuentes y graves debido al cambio climático. La conciencia pública debe crecer.', '2024-11-11 01:31:14'),
(9, 5, 7, 'La investigación en medicina personalizada tiene el potencial de transformar completamente los tratamientos médicos. Muy prometedor.', '2024-11-11 01:31:14'),
(10, 5, 9, 'Las enfermedades raras necesitan más atención. La medicina personalizada es un paso hacia adelante, pero también falta mucho por descubrir.', '2024-11-11 01:31:14'),
(11, 6, 3, 'La educación en línea ha permitido una mayor accesibilidad a la educación, pero aún hay muchos desafíos con la equidad y la calidad.', '2024-11-11 01:31:14'),
(12, 6, 5, 'Aunque la educación en línea es más accesible, los estudiantes deben tener las herramientas adecuadas para aprovecharla al máximo. No todos tienen acceso a la tecnología adecuada.', '2024-11-11 01:31:14'),
(13, 7, 4, 'El trabajo remoto ha cambiado la forma en que colaboramos. Se están creando nuevas oportunidades, pero también presenta desafíos para la productividad.', '2024-11-11 01:31:14'),
(14, 7, 8, 'El teletrabajo ha sido una bendición para muchas personas, pero es importante no perder el contacto humano y las dinámicas de equipo. Es un balance difícil de lograr.', '2024-11-11 01:31:14');


